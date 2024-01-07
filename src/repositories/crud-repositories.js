const { Logger } = require("../config");

// throw error to use it int upper layer.

class CrudRepository {
  constructor(model) {
    this.model = model;
  }

  async create(data) {
    console.log(data, "---> repocrud");
    const response = await this.model.create(data);
    return response;
  }

  async destroy(data) {
    try {
      const response = await this.model.destroy({});
      return response;
    } catch (error) {
      Logger.error("Something went wrong in the CrudRepository : destroy");
      throw error;
    }
  }

  async get(data) {
    try {
      console.log(data.id);
      const response = await this.model.findByPk(data);
      return response;
    } catch (error) {
      Logger.error("Something went wrong in the CrudRepository : get");
      throw error;
    }
  }

  async getAll() {
    try {
      const response = await this.model.findAll();
      return response;
    } catch (error) {
      Logger.error("Something went wrong in the CrudRepository : getAll");
      throw error;
    }
  }

  async update(id, data) {
    try {
      const response = await this.model.update(data, {
        where: {
          id: id,
        },
      });
      return response;
    } catch (error) {
      Logger.error("Something went wrong in the CrudRepository : update");
      throw error;
    }
  }
}

module.exports = CrudRepository;
