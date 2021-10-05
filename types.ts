type Region = {
    code: string;
    caption: string;
  };
  
  type Area = {
    caption: string;
    shortCaption: string;
    code: string;
    regions: Region[];
  };
  
  type Country = {
    caption: string;
    value: number;
  };
  
  type Subitem = {
    caption: string;
    value: number;
  };

  type District = {
    code: string;
    caption: string;
    value: number;
    subitems: Subitem[];
  };