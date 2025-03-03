const { model } = require("mongoose")

const {Orderschema} = require("../Schemas/Orderschem")
const Ordermodel =model("Order", Orderschema)
module.exports = {Ordermodel }