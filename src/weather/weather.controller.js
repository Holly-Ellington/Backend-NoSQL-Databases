const WeatherStatus = require("./weather.model");

function bodyDataHas(propertyName) {
  return function (req, res, next) {
    const { data = {} } = req.body;
    if (data[propertyName]) {
      return next();
    }
    next({
      status: 400,
      message: `Must include a ${propertyName}`,
    });
  };
}

async function list(req, res) {
  try {
    const weatherData = await WeatherStatus.find();
  // updated 
    res.status(200).json(weatherData); 
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function create(req, res) {
  try {
    const { data } = req.body;
    const newWeatherStatus = await WeatherStatus.create(data);
    res.status(201).json({ data: newWeatherStatus });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function weatherStatusExists(req, res, next) {
  const { weatherStatusId } = req.params;
  try {
    const foundWeatherStatus = await WeatherStatus.findById(weatherStatusId);
    if (foundWeatherStatus) {
      res.locals.weatherStatus = foundWeatherStatus;
      return next();
    }
    next({
      status: 404,
      message: `Weather Status id not found: ${weatherStatusId}`,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function read(req, res) {
  try {
    const { weatherStatus } = res.locals;
    res.json({ data: weatherStatus });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function update(req, res) {
  try {
    const { weatherStatusId } = req.params;
    const { data } = req.body;
    const updatedWeatherStatus = await WeatherStatus.findByIdAndUpdate(
      weatherStatusId,
      data,
      { new: true }
    );
    res.json({ data: updatedWeatherStatus });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function destroy(req, res) {
  try {
    const { weatherStatusId } = req.params;
    await WeatherStatus.findByIdAndDelete(weatherStatusId);
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  list,
  create: [
    bodyDataHas("date"),
    bodyDataHas("city"),
    bodyDataHas("state"),
    bodyDataHas("country"),
    bodyDataHas("temperature"),
    bodyDataHas("condition"),
    create,
  ],
  read: [weatherStatusExists, read],
  update: [
    weatherStatusExists,
    bodyDataHas("date"),
    bodyDataHas("city"),
    bodyDataHas("state"),
    bodyDataHas("country"),
    bodyDataHas("temperature"),
    bodyDataHas("condition"),
    update,
  ],
  delete: [weatherStatusExists, destroy],
};
