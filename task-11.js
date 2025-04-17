

function groupCategory(items,ckey){
    const group={};
   items.forEach(item=>{
    if(!group[item[ckey]]){
        group[item[ckey]]=[];
    }
    group[item[ckey]].push(item);
   })
   return group;
}
  const products = [
    { name: 'Laptop', category: 'Electronics', price: 1200 },
    { name: 'T-Shirt', category: 'Apparel', price: 25 },
    { name: 'Mouse', category: 'Electronics', price: 30 },
    { name: 'Jeans', category: 'Apparel', price: 70 },
  ];
  
  const grouped = groupCategory(products, 'category');
  console.log(grouped);
    