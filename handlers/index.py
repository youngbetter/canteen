#!/usr/bin/env Python
# coding=utf-8

import tornado.web
import json
from methods.BaseHandler import BaseHandler


class IndexHandler(BaseHandler):

    def get(self):
        self.render("index_new.html")
