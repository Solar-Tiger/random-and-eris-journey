import { createOurFatefulEncounterSection } from '../../components/Homepage/Homepage.js';
import {
    createOurStoryReasonSection,
    createOurStoryExampleSection,
    createOurFatefulEncounterEndingSection
} from './OurStory.js';

const main = document.querySelector('main');

main.append(
    createOurFatefulEncounterSection(),
    createOurStoryReasonSection(),
    createOurStoryExampleSection(),
    createOurFatefulEncounterEndingSection()
);
