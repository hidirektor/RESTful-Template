const HttpStatusCode = require('http-status-codes');
const { isEmptyCheck } = require('../utils/util');

class GenericReqRes {
    constructor(crud) {
        this.crud = crud;
    }

    async create({ req, res, optionalBody = null }) {
        let body = req.body;
        if (!isEmptyCheck(optionalBody)) body = optionalBody;

        try {
            const newItem = await this.crud.create(body);
            res.status(HttpStatusCode.OK).json({ 'status': true, results: newItem.result });
        } catch (err) {
            res.status(err.status || HttpStatusCode.INTERNAL_SERVER_ERROR).send(err.message);
        }
    }

    async getAll({ req, res, optionalWrapperFunction = null }) {
        try {
            let items = await this.crud.getAll();

            if (!isEmptyCheck(optionalWrapperFunction)) {
                items = await optionalWrapperFunction(items);
            }
            res.status(HttpStatusCode.OK).json({ 'status': true, 'items': items });
        } catch (err) {
            res.status(err.status || HttpStatusCode.INTERNAL_SERVER_ERROR).send(err.message);
        }
    }

    async findOne({ req, res, optionalWrapperFunction = null }) {
        try {
            let item = await this.crud.findOne({ id: req.params.id });

            if (!isEmptyCheck(optionalWrapperFunction)) {
                item = await optionalWrapperFunction(item);
            }
            if (!item.status) throw item.result;
            res.status(HttpStatusCode.OK).json({ 'status': true, 'item': item.result });
        } catch (err) {
            res.status(err.status || HttpStatusCode.INTERNAL_SERVER_ERROR).send(err);
        }
    }

    async update(req, res) {
        try {
            const item = await this.crud.update({ id: req.params.id }, req.body);
            if (!item.status) throw item.result;
            res.status(HttpStatusCode.OK).json({ 'status': true, 'items': item });
        } catch (err) {
            res.status(err.status || HttpStatusCode.INTERNAL_SERVER_ERROR).send(err);
        }
    }

    async delete({ req, res, optionalWrapperFunction = null }) {
        try {
            let item = await this.crud.delete({ id: req.params.id });

            if (!isEmptyCheck(optionalWrapperFunction)) {
                item = await optionalWrapperFunction(item);
            }

            if (!item.status) throw item.result;
            res.status(HttpStatusCode.OK).json({ 'status': true, 'result': item.result });
        } catch (err) {
            res.status(err.status || HttpStatusCode.INTERNAL_SERVER_ERROR).send(err);
        }
    }
}

module.exports = GenericReqRes;