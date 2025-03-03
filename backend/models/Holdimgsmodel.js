const { model } = require("mongoose")

const { HoldingsSchema } = require("../Schemas/HoldingsSchemas")
const HoldingsModel = model("Holding", HoldingsSchema)
module.exports = { HoldingsModel }