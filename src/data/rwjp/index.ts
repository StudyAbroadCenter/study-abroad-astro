// Canonical RWJP data entry point.
//
// New website/manual/FAQ code should import RWJP data from this module rather than
// reaching into individual policy files. The underlying files remain split by
// subject so that facts can be maintained safely without creating one giant file.

import * as annual2027 from '../rwjp-2027-facts';
import * as annualFacts from '../rwjp-annual-facts';
import * as applicationProcess from '../rwjp-application-process';
import * as applicationRequirements from '../rwjp-application-requirements';
import * as journeyLinks from '../rwjp-journey-links';
import * as placement from '../rwjp-placement-policy';
import * as orientation from '../rwjp-orientation-policy';
import * as visa from '../rwjp-visa-policy';
import * as sharedKnowledge from '../rwjp-shared-knowledge';
import * as campusDormConduct from '../rwjp-campus-dorm-conduct-policy';
import * as discipline from '../rwjp-discipline-policy';
import * as employment from '../rwjp-employment-policy';
import * as weekendTravel from '../rwjp-weekend-travel-policy';
import * as wheeledTransport from '../rwjp-wheeled-transport-policy';
import * as deviceRecommendation from '../rwjp-device-recommendation-policy';
import * as smartphone from '../rwjp-smartphone-policy';
import * as moneyPreparation from '../rwjp-money-payment-preparation-policy';
import * as transportIc from '../rwjp-transport-ic-policy';
import * as dormCore from '../shared-taishogun-dorm-rules';
import * as dormDamage from '../taishogun-dormitory-damage-policy';
import * as dormAmenities from '../rwjp-daishogun-amenities-policy';
import * as dormCleaningWaste from '../rwjp-daishogun-cleaning-waste-policy';
import * as dormCommonSpace from '../rwjp-daishogun-common-space-policy';
import * as dormFurnitureStorage from '../rwjp-daishogun-furniture-storage-policy';
import * as dormKitchen from '../rwjp-daishogun-kitchen-policy';
import * as dormPersonalItems from '../rwjp-daishogun-personal-items-policy';
import * as dormRoomAssignment from '../rwjp-daishogun-room-assignment-policy';
import * as dormRoomChange from '../rwjp-daishogun-room-change-policy';
import * as dormSharedMedia from '../rwjp-daishogun-shared-media-policy';
import * as dormVisitorDelivery from '../rwjp-daishogun-visitor-delivery-policy';

/**
 * One stable read surface for all RWJP consumers.
 *
 * Boundary rules:
 * - annual: values that normally change by programme year (dates, fees, application period)
 * - application: application, documents, selection, visa, placement and confirmed public destinations
 * - academicOperations: teaching/attendance/orientation/conduct rules
 * - accommodation: Taishogun Dormitory rules shared by RWJP and RWJP Express where stated
 * - participantLife: practical preparation and safety rules
 *
 * Do not duplicate a confirmed value in this facade. Update the authoritative source
 * module and let this facade expose it.
 */
export const rwjpData = {
  annual: {
    current: annual2027,
    registry: annualFacts,
  },
  application: {
    process: applicationProcess,
    requirements: applicationRequirements,
    journeyLinks,
    placement,
    visa,
  },
  academicOperations: {
    sharedKnowledge,
    orientation,
    conduct: campusDormConduct,
    discipline,
    employment,
  },
  accommodation: {
    core: dormCore,
    damage: dormDamage,
    amenities: dormAmenities,
    cleaningWaste: dormCleaningWaste,
    commonSpace: dormCommonSpace,
    furnitureStorage: dormFurnitureStorage,
    kitchen: dormKitchen,
    personalItems: dormPersonalItems,
    roomAssignment: dormRoomAssignment,
    roomChange: dormRoomChange,
    sharedMedia: dormSharedMedia,
    visitorDelivery: dormVisitorDelivery,
  },
  participantLife: {
    weekendTravel,
    wheeledTransport,
    deviceRecommendation,
    smartphone,
    moneyPreparation,
    transportIc,
  },
} as const;

// Compatibility exports for existing components. New code may migrate gradually
// without changing the underlying source of truth.
export { rwjp2027Facts, isKnownFact } from '../rwjp-2027-facts';
export { rwjpApplicationProcess, rwjpAdmissionNotification } from '../rwjp-application-process';
export { rwjpApplicationRequirements, rwjpApplicationDocumentPolicy } from '../rwjp-application-requirements';
export { rwjpVisaPolicy } from '../rwjp-visa-policy';
export { rwjp2027JourneyLinks, isJourneyLinkReady } from '../rwjp-journey-links';
