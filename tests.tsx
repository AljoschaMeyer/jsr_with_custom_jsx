import { SomeMacro } from "./mod.tsx";

import { Context } from "macromania";


import { assertEquals } from "@std/assert";

Deno.test("string expression", async () => {
    const ctx = new Context();
    const got = await ctx.evaluate(<SomeMacro someProp>hello</SomeMacro>);
    assertEquals(got, "hellofoo");
  });