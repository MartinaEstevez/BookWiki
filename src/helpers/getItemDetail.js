const itemDetail = {
    
    format: "paperbag",
    edition: "BookWiki edition",
    publication: 2022,
  
}

export const getItemDetails = () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(itemDetail), 3000);
    });
  };