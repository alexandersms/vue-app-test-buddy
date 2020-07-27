//import { expect } from "chai"
import { shallowMount } from "@vue/test-utils";
import Home from "@/views/Home.vue";

describe("Home.vue", () => {
  it("h1 has correct h1 tag rendered", () => {
    const wrapper = shallowMount(Home);
    expect(wrapper.find("h1").text()).toMatch("Random Counter")
  });

  it("button has correct text rendered", () => {
    const wrapper = shallowMount(Home);
    expect(wrapper.find("#increment").text()).toMatch("Increment")
  });

  it("button has correct text rendered", () => {
    const wrapper = shallowMount(Home);
    expect(wrapper.find("#decrement").text()).toMatch("Decrement")
  });
  
})