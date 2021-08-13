"use strict";

const Node = require("./node");
const Queue = require("../10-stack-and-queue/queue");

class KaryTree {
  constructor(value) {
    this.root = null;
  }

  BuildKaryTree(children, k, h) {
    // if (children.length <= 0) return null;
    // let ind = 0;
    // let result;
    // let _BuildKaryTree = (children, k) => {
    //   let nNode = new Node(children[ind]);
    //   if (nNode == null) {
    //     return null;
    //   }
    //   for (let i = 0; i < k; i++) {
    //     if (ind < children.length) {
    //       console.log("hi", ind);
    //       ind++;
    //       if (children[ind]) nNode.child.push(_BuildKaryTree(children, k));
    //     } else {
    //       nNode = new Node(children[ind]);
    //       _BuildKaryTree(children, k);
    //     }
    //   }
    //   return (result = nNode);
    // };
    // _BuildKaryTree(children, k);
    // return result;
  }
}

module.exports = KaryTree;
