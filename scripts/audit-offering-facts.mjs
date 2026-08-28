import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const canonicalPath = path.join(root, 'src/data/current-offerings.ts');
const canonical = fs.readFileSync(canonicalPath, 'utf8');

const presentationFiles = [
  'src/data/programme-page-drafts.ts',
  'src/data/english-programme-pages.ts',
  'src/data/korean-programme-pages.ts',
  'src/data/chinese-localisation.ts',
];

const monthNames = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

const dateValues = [...new Set(canonical.match(/20\d{2}-\d{2}-\d{2}/g) ?? [])];
const moneyValues = [...canonical.matchAll(/(?:programmeFeeJPY|accommodationFeeJPY|refundDeductionJPY):\s*(\d+)/g)]
  .map((match) => Number(match[1]));

const dateVariants = (iso) => {
  const [yearText, monthText, dayText] = iso.split('-');
  const year = Number(yearText);
  const month = Number(monthText);
  const day = Number(dayText);
  return [
    iso,
    `${year}/${month}/${day}`,
    `${year}年${month}月${day}日`,
    `${year}년 ${month}월 ${day}일`,
    `${monthNames[month - 1]} ${day}, ${year}`,
  ];
};

const moneyVariants = (value) => [
  String(value),
  value.toLocaleString('en-US'),
  `¥${value.toLocaleString('en-US')}`,
  `￥${value.toLocaleString('ja-JP')}`,
  `${value.toLocaleString('ja-JP')}円`,
];

const forbidden = [
  ...dateValues.flatMap(dateVariants),
  ...moneyValues.flatMap(moneyVariants),
].filter((value) => value.length >= 6);

const violations = [];
for (const relativePath of presentationFiles) {
  const absolutePath = path.join(root, relativePath);
  const content = fs.readFileSync(absolutePath, 'utf8');
  for (const literal of forbidden) {
    if (content.includes(literal)) {
      violations.push({ file: relativePath, literal });
    }
  }
}

if (violations.length > 0) {
  console.error('Annual offering fact duplication detected outside src/data/current-offerings.ts.');
  console.error('Use canonical structured facts and format/derive the value at render time.');
  for (const violation of violations) {
    console.error(`- ${violation.file}: ${violation.literal}`);
  }
  process.exit(1);
}

console.log(`Offering fact audit passed: ${dateValues.length} dates and ${moneyValues.length} monetary values protected.`);
