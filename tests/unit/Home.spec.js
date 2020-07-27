import { expect } from "chai"
import { shallowMount } from "@vue/test-utils";
import Home from "@/views/Home.vue";

describe("Home.vue", () => {
  it("h1 has correct h1 tag rendered", () => {
    const wrapper = shallowMount(Home);
    expect(wrapper.find("h1").text()).equal("Random Counter")
  });

  it("button has correct text rendered", () => {
    const wrapper = shallowMount(Home);
    expect(wrapper.find("#increment").text()).equal("Increment")
  });

  it("button has correct text rendered", () => {
    const wrapper = shallowMount(Home);
    expect(wrapper.find("#decrement").text()).equal("Decrement")
  });
})