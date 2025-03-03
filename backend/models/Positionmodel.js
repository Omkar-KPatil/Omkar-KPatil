const { model } = require("mongoose")
const { PositionSchema } = require("../Schemas/Positionschema")

const PositionModel = model("Position", PositionSchema)
module.exports = { PositionModel }