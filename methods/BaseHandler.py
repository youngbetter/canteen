# -*- coding: utf-8 -*-

import tornado.web
from handlers.Database.models import redis_engine, get_db


class BaseHandler(tornado.web.RequestHandler):

    @property  # python装饰器把一个方法变成属性调用
    def db(self):
        return get_db()

    #     def initialize(self):
    #     self.session = models.DB_Session()

    def on_finish(self):
        self.db.close()

    @property
    def redis(self):
        return redis_engine
