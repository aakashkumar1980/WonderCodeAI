package com.aadityadesigners;


//Define Model
export class AttributesModel{ 
  name: string; 
  attributes: { name: string, type: BigInteger }[];
  
  constructor(name?: string, attributes?:{ name: string, type: BigInteger }[]) { 
    this.name = name; 
    this.attributes = attributes;
   } 
};",