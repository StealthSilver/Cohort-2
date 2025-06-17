// GARBAGE COLLECTION ALGORITHM

class Node {
  constructor(value) {
    this.value = value;
    this.references = []; // Other nodes this object points to
    this.marked = false; // Whether this node is reachable
  }
}

class GarbageCollector {
  constructor() {
    this.objects = []; // All objects in memory
  }

  addObject(node) {
    this.objects.push(node);
  }

  // Simulate the Mark Phase
  mark(root) {
    if (!root || root.marked) return;
    root.marked = true; // Mark as reachable
    for (let ref of root.references) {
      this.mark(ref); // Recursively mark references
    }
  }

  // Simulate the Sweep Phase
  sweep() {
    this.objects = this.objects.filter((node) => {
      if (node.marked) {
        node.marked = false; // Unmark for the next GC cycle
        return true; // Keep marked objects
      }
      console.log(`Garbage collected: ${node.value}`);
      return false; // Remove unmarked (garbage) objects
    });
  }

  // Perform Garbage Collection
  collectGarbage(roots) {
    // Mark Phase
    for (let root of roots) {
      this.mark(root);
    }
    // Sweep Phase
    this.sweep();
  }
}

// Example Usage
const gc = new GarbageCollector();

// Creating objects (nodes in the graph)
const obj1 = new Node("Object 1");
const obj2 = new Node("Object 2");
const obj3 = new Node("Object 3");

// Setting up references
obj1.references.push(obj2);
obj2.references.push(obj3);

// Add objects to memory
gc.addObject(obj1);
gc.addObject(obj2);
gc.addObject(obj3);

// Simulate removing a root
const roots = [obj1]; // obj2 and obj3 are reachable through obj1

// Run Garbage Collection
gc.collectGarbage(roots);

// After obj1 is removed
gc.collectGarbage([]); // No roots -> All objects are garbage collected
