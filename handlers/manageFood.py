#!/usr/bin/env Python
# coding=utf-8

import tornado.web
import json
from methods.BaseHandler import BaseHandler
from Database.tables import Food
from methods.userFuncs import UFuncs
from handlers.ImageHandler import ImageHandler


class ManageFoodHandler(BaseHandler):

    retjson = []

    def get(self):
        self.render("manageFood.html")

    def post(self):
        type = self.get_argument('askType')
        img_handler = ImageHandler()
        if type == 'addNewFood':
            foodName = self.get_argument('foodName')
            foodCantId = self.get_argument('foodCantId')
            foodWinId = self.get_argument('foodWinId')
            foodPrice = self.get_argument('foodPrice')
            foodIsSpecial = self.get_argument('foodIsSpecial')
            #foodImgLocal = self.get_argument('foodImgLocal')
            #foodImgName = img_handler.insertSingle(foodImgLocal)
            print foodName
            print foodCantId
            print foodWinId
            print foodPrice
            print foodIsSpecial
            #print foodImgName
            try:
                pass
            #     new_food = Food(
            #         foodName=foodName,
            #         foodCantId=foodCantId,
            #         foodWinId=foodWinId,
            #         foodPrice=foodPrice,
            #         foodIsSpecial=foodIsSpecial,
            #         foodImgUrl=foodImgName,
            #     )
            #     self.db.merge(new_food)
            #     self.db.commit()
            except Exception, e:
                print e
        self.write(json.dumps(self.retjson, ensure_ascii=False, indent=2))