/*
  code example from Alex Lomia
  link, https://www.linkedin.com/pulse/navigating-json-trees-recursion-javascript-alex-lomia/
*/

const familyTree = {
  // Depth 0
  name: "John",
  children: [
    // Depth 1
    {
      name: "Jane",
      children: [
        // Depth 2
        {
          name: "Liam",
          children: [
            // Depth 3
            { name: "Joseph", children: [] }
          ]
        }
      ]
    },
    // Depth 1
    {
      name: "Mark",
      children: [
        // Depth 2
        { name: "Sophia", children: [] }
      ]
    }
  ]
}

/*
  Family Lookup
  1) Create family object
  2) print parent name & children's name if they have
  3) print childrens name & children childrens name if they have
  4) until reached max depth.
  5) return list of parent and children
*/

function traverseTree(node) {
  if (node.children.length === 0) {
    console.log(node.name)
    return;
  }

  console.log(node.name)

  node.children.forEach(child => traverseTree(child))
}

console.log(traverseTree(familyTree));