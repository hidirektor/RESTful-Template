const { object } = require("joi");

class GenericCRUD {
    constructor({ model = null, where = null }) {
        this.model = model;
        this.setWhere(where);
    }

    getWhere() { return this.where; }
    setWhere(where) {
        this.where = where;
        if (where === null || where === undefined) this.where = '';
    }

    async create(data) {
        try {
            const body = Object.assign(data, this.where)
            const newItem = await this.model.create(body);
            return { status: true, result: newItem };
        } catch (error) {
            return { status: false, result: error };
        }
    }

    async getAll() {
        const items = await this.model.findAll({ where: this.where });
        this.setWhere();
        return items;
    }

    async findOne(object) {
        const where = Object.assign(object, this.where);
        const item = await this.model.findOne({ where: where });
        this.setWhere();
        if (!item) {
            return { status: false, result: 'Item not found' };
        }
        return { status: true, result: item };
    }

    async update(object, data) {
        const where = Object.assign(object, this.where);
        const item = await this.model.findOne({ where: where });
        this.setWhere();

        if (!item) {
            return { status: false, result: 'Item not found' };
        }
        try {
            await item.update(data);
            return { status: true, result: item };
        } catch (error) {
            return { status: false, result: 'Unable to update item' };
        }
    }

    async delete(object) {
        const where = Object.assign(object, this.where);
        const item = await this.model.findOne({ where: where });
        this.setWhere();

        if (!item) {
            return { status: false, result: 'Item not found' };
        }
        try {
            await item.destroy();
            return { status: true, result: item };
        } catch (error) {
            return { status: false, result: 'Unable to delete item' };
        }
    }
}

module.exports = GenericCRUD;