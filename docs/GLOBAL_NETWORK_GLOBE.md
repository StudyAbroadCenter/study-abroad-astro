# Global Learning Network — globe interaction notes

## Purpose
The globe is a lightweight visual orientation device for the Global Learning Network section. It is not a geographic data visualisation and must not imply precise coordinates, participant counts, or political classification.

## Interaction
- Country/region nodes remain the source of selection.
- Selecting, focusing, or hovering a node rotates a stylised SVG globe surface and updates the selected-country label.
- The active route from Ritsumeikan is emphasised at the same time.
- The globe uses SVG/CSS only; no WebGL or 3D runtime dependency is introduced.
- `prefers-reduced-motion` removes the rotation transition and pulse animation.

## Flags and political neutrality
- Small emoji flags are used only as recognition aids.
- Public copy continues to use `countries / regions` rather than redefining geopolitical status in the interface.
- Evidence and institution records remain governed by `docs/GLOBAL_NETWORK_DATA.md`.

## Accuracy boundary
The central globe uses deliberately stylised land shapes and rotational focus. It must never be described as a precise map or used to infer exact geographic location.

## Visual direction
- Reduce the previous near-black dashboard feeling.
- Use a lighter charcoal editorial surface, warmer globe, translucent country markers and restrained Ritsumeikan enji accents.
- Keep the central institutional identity `RITSUMEIKAN`, not `RSJP`, because the network covers multiple short-term programmes.
- Preserve the fixed desktop canvas so institution-list length cannot shift the map.
