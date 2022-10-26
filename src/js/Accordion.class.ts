import {baseConfig, accordionNodes} from './baseConfig.interface'
import {AccordionItem} from './AccordionItem.class.js'

class Accordion{
  mainNode: HTMLElement;
  config : baseConfig;
  items : AccordionItem[];

  defaultConfig : baseConfig = {
    autoClose : false
  };

  constructor(mainNode : HTMLElement, config : baseConfig | {}){
    this.mainNode = mainNode;
    this.config = Object.assign(this.defaultConfig, config);

    this.items = this.createItems();

    this.mainNode.dataset.imxaccordion = '';

    this.checkInitialOpen();
    if(this.config.useMockStyles) this.mainNode.dataset.imxaccordion_mockStyles = '';
  }

  /**
   * 
   * 
   * @returns AccordionItem[]
   */
  private createItems() : AccordionItem[] {
    const returnArray : AccordionItem[] = [];
    const itemNodes = AccordionHelper.lookUpItemNodes(this.mainNode, {
      itemClass : this.config.itemClass ?? undefined,
      titleClass : this.config.titleClass ?? undefined,
      contentClass : this.config.contentClass ?? undefined
    });

    itemNodes.forEach((itemNode, index) => {
      returnArray.push( new AccordionItem(itemNode.item, itemNode.title, itemNode.content, this) );
    });

    return returnArray;
  }

  private checkInitialOpen() : void {
    this.items.forEach((accordionItem, index) => {

      if(Array.isArray(this.config.initialOpen)){    
        if(this.config.initialOpen.indexOf(index) !== -1){
          accordionItem.activate();
        }
      }else if(this.config.initialOpen === 'all'){
        accordionItem.activate();
      }

    })
  }
  
  public updateActive(accordionItem : AccordionItem) : void {
    if(this.config.autoClose) this.items.forEach( item => {
      if(item !== accordionItem) item.deactivate();
    });
  }
}

const AccordionHelper = (() => {

  /**
   * returns an array with title/content node pairs of the accordion
   * 
   * @returns accordionNodes[]
   */
  const lookUpItemNodes = (mainNode : HTMLElement, cssClasses? : {itemClass? : string, titleClass? : string, contentClass? : string}) : accordionNodes[] => {
    const returnArray : accordionNodes[] = [];

    const itemQuerySelector = (cssClasses?.itemClass) ? '.' + cssClasses.titleClass : '[data-imxaccordion_item]';
    const titleQuerySelector = (cssClasses?.titleClass) ? '.' + cssClasses.titleClass : '[data-imxaccordion_title]';
    const contentQuerySelector = (cssClasses?.contentClass) ? '.' + cssClasses.contentClass : '[data-imxaccordion_content]';

    const itemNodeCollection = <HTMLElement[]> Array.from(mainNode.querySelectorAll(itemQuerySelector));
    const titleNodeCollection = <HTMLElement[]> Array.from(mainNode.querySelectorAll(titleQuerySelector));
    const contentNodeCollection = <HTMLElement[]> Array.from(mainNode.querySelectorAll(contentQuerySelector));

    itemNodeCollection.forEach( (itemNode, index) => {
      const titleNode = titleNodeCollection[index];
      const contentNode = contentNodeCollection[index];

      if(contentNode)
        returnArray.push({
          item: itemNode,
          title: titleNode,
          content: contentNode
        });
    });

    return returnArray;
  }

  return {
    lookUpItemNodes : lookUpItemNodes
  }

})()

export {Accordion};