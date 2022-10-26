interface baseConfig {
  // classes to look up title and content items
  itemClass? : string
  titleClass? : string
  contentClass? : string

  // used to autoclose open content items when user opens an other content item
  autoClose? : boolean
  // can set to open specific or all content nodes on startup
  initialOpen? : 'all' | number[]

  // user can ultimately use default mock styles to get the accordion up and running
  useMockStyles? : boolean

  // user can pass an icon by himself
  icon? : string
  // user can define the position of the icon
  iconPosition? : 'before' | 'after'
}

type accordionNodes = {
  item : HTMLElement,
  title : HTMLElement,
  content : HTMLElement
}

export {baseConfig, accordionNodes};