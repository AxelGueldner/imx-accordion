import {Accordion} from './Accordion.class.js'

class AccordionItem{
  accordion : Accordion;

  itemNode : HTMLElement;
  titleNode : HTMLElement;
  contentNode : HTMLElement;

  isActive : boolean = false;

  constructor(itemNode : HTMLElement, titleNode : HTMLElement, contentNode : HTMLElement, accordion : Accordion){
    this.itemNode = itemNode;
    this.titleNode = titleNode;
    this.contentNode = contentNode;

    this.accordion = accordion;

    this.deactivate();

    this.watchEvent_click();
  }

  private watchEvent_click() : void {
    this.itemNode.setAttribute('tabindex', '0');
    
    this.titleNode.addEventListener('click', event => {
      this.itemNode.blur();
      this.toggle();
    });
  }

  public toggle() : void {
    if(!this.isActive){
      this.activate();
    }else{
      this.deactivate();
    }
  }

  public activate() : boolean {
    if(!this.isActive){
      this.isActive = true;
      
      this.accordion.updateActive(this);

      this.itemNode.dataset.imxaccordion_item = 'active'
      
      return true;
    }

    return false;
  }

  public deactivate() :boolean {
    if(this.isActive){
      this.isActive = false;
      
      this.itemNode.dataset.imxaccordion_item = ''

      return true;
    }

    return false;
  }
}

export {AccordionItem};