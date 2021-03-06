#!/usr/bin/env Python
# coding=utf-8

import tornado.web
import json
from methods.BaseHandler import BaseHandler
from Database.tables import Message
from methods.userFuncs import UFuncs
from handlers.ImageHandler import ImageHandler


class FeedBackHandler(BaseHandler):

    retjson = {}

    def get(self):
        self.render("feedBack.html")

    def post(self):
        type = self.get_argument('askType')
        img_handler = ImageHandler()
        print "out"
        if type == 'addNewMsg':
            print "in"
            msgType = self.get_argument('msgType')
            msgCant = self.get_argument('msgCant')
            msgContent = self.get_argument('msgContent')
            self.retjson['msgType'] = msgType
            self.retjson['msgCant'] = msgCant
            self.retjson['msgContent'] = msgContent
            print msgContent+msgCant+msgType
            new_msg = Message(
                msgType=msgType,
                msgCant=msgCant,
                msgContent=msgContent,
            )
            self.db.merge(new_msg)
            try:
                self.db.commit()
                print "HELLO"
            except Exception,e:
                self.db.rollback()
                print "EROOR"
        self.write(json.dumps(self.retjson, ensure_ascii=False, indent=2))
