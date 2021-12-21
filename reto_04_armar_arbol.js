function createXmasTree(height) {
 
    const TREE_ELEM = {
      LEAF: '*',
      GAP: '_',
      TRUNK: '#'
    }
    
    let tree = [], width = 1, emptyChars = height -1;
    let gap = TREE_ELEM.GAP.repeat(emptyChars);
    const trunk = gap + TREE_ELEM.TRUNK + gap;
    
    for (let i = 1; i <= height; i++){
      let leafs = TREE_ELEM.LEAF.repeat(width);
      gap = TREE_ELEM.GAP.repeat(emptyChars);
      tree = [...tree, gap + leafs + gap];
      width += 2;
      emptyChars--;
    }
  
    
    tree = [...tree, trunk, trunk]
    
    return tree.join('\n')
  }
  
  
  createXmasTree(10)
  
  
