#!/usr/bin/env Python
# coding=utf-8

import tornado.web
import json
from methods.BaseHandler import BaseHandler
from Database.tables import Food
from methods.userFuncs import UFuncs
from handlers.ImageHandler import ImageHandler


class FeedBackHandler(BaseHandler):

    retjson = []

    def get(self):
        self.render("feedBack.html")
