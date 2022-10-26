import {baseConfig} from './baseConfig.interface';
import {Accordion} from './Accordion.class.js';

const init = (() => {
  const create = (config? : baseConfig) : Accordion[] => {
    const accordionNodeCollection = <HTMLElement[]> Array.from(document.querySelectorAll('[data-imxaccordion]'));
    const returnArray : Accordion[] = [];

    accordionNodeCollection.forEach(accordionNode => {
      const configActual = Object.assign(config ?? {}, createConfig(accordionNode));
      returnArray.push( createOnSpecificNode(accordionNode, configActual) )
    });
    return returnArray;
  }

  const createOnSpecificNode = (mainNode : HTMLElement, config : baseConfig ) : Accordion => {
    const accordion : Accordion = new Accordion(mainNode, config);
    return accordion;
  }

  const createConfig = (mainNode : HTMLElement) : baseConfig => {
    const configJson = JSON.parse(mainNode.dataset.imxaccordion ?? '');
    return configJson;
  }

  return {
    create: create,
    createOnSpecificNode: createOnSpecificNode
  }
})();

export default init;