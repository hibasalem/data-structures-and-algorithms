"use strict";

const Graph = require("../graph");
const Vertex = require("../vertex");
const Edge = require("../edge");

describe("Graph Implementation", () => {
  let graph = new Graph();
  let graph2 = new Graph();

  let vertexA = new Vertex("A");
  let vertexB = new Vertex("B");
  let vertexC = new Vertex("C");

  graph.addNode(vertexA);
  graph.addNode(vertexB);
  graph.addNode(vertexC);

  it("Node can be successfully added to the graph", () => {
    expect(graph.addNode(vertexA)).toBe(vertexA);
  });

  it("An edge can be successfully added to the graph", () => {
    graph.addEdge(vertexA, vertexB);
  });

  it("A collection of all nodes can be properly retrieved from the graph", () => {
    expect(graph.getnodes()).toEqual([
      { value: "A" },
      { value: "B" },
      { value: "C" },
    ]);
  });
  it("All appropriate neighbors can be retrieved from the graph", () => {
    expect(graph.getNeighbors(vertexA)).toEqual([
      { vertex: { value: "B" }, weight: 0 },
    ]);
  });
  it("Neighbors are returned with the weight between nodes included", () => {
    expect(graph.getNeighbors(vertexA)).toEqual([
      { vertex: { value: "B" }, weight: 0 },
    ]);
  });
  it("The proper size is returned, representing the number of nodes in the graph", () => {
    expect(graph.size()).toEqual(3);
  });

  it("An empty graph properly returns null", () => {
    expect(graph2.getnodes()).toBeNull();
  });
});
