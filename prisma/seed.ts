import { PrismaClient } from "@prisma/client"
let db = new PrismaClient()

function getJokes() {
  return [
    {
      name: "David",
      content:
        "Did you hear that David lost his ID in Prague? Now we just call him Dav."
    },
    {
      name: "Frisbee",
      content: `I was wondering why the frisbee was getting bigger, then it hit me.`
    },
    {
      name: "Trees",
      content: `Why do trees seem suspicious on sunny days? Dunno, they're just a bit shady.`
    },
    {
      name: "Skeletons",
      content: `Why don't skeletons ride roller coasters? They don't have the stomach for it.`
    },
    {
      name: "Hippos",
      content: `Why don't you find hippopotamuses hiding in trees? They're really good at it.`
    },
    {
      name: "Dinner",
      content: `What did one plate say to the other plate? Dinner is on me!`
    },
    {
      name: "Elevator",
      content: `My first time using an elevator was an uplifting experience. The second time let me down.`
    }
  ]
}

async function seed() {
  await Promise.all(
    getJokes().map((joke) => {
      return db.joke.create({ data: joke })
    })
  )
}

seed()
