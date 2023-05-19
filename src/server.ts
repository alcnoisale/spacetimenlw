import fastify from "fastify";

const app = fastify();

app.listen({
    port: 3333,
}).then(() => {
    console.log("Server HTTP running on http://localhost:3333")
})
// const nome : string = "Dog"
// console.log(nome)
// console.log("heloo oi")