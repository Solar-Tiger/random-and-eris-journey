import { createOurFatefulEncounterSection } from '../Homepage/Homepage.js';
import { createOurStoryReasonSection } from './OurStory.js';

const main = document.querySelector('main');

main.append(createOurFatefulEncounterSection(), createOurStoryReasonSection());
