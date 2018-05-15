#!/usr/bin/env Python
# coding=utf-8

import tornado.web
import json
from sqlalchemy import desc, and_
from methods.BaseHandler import BaseHandler
from Database.tables import Food, Windows
from methods.userFuncs import UFuncs
from handlers.ImageHandler import ImageHandler


class ManageFoodHandler(BaseHandler):

    retjson = {
    }

    def get(self):
        food = []
        try:
            results = self.db.query(Food).order_by(desc(Food.foodWinId)).all()
            if results:
                for result in results:
                    # 对取出来的数据重新处理
                    try:
                        win = self.db.query(Windows).filter(and_(Windows.winCantType == result.foodCantId,
                                                                 Windows.winId == result.foodWinId)).one()
                        result.foodWinId = win.winName
                    except Exception, e:
                        print '数据库查询出错'

                    if result.foodCantId == '1':
                        result.foodCantId = '梅园'
                    elif result.foodCantId == '2':
                        result.foodCantId = '桃园'
                    else:
                        result.foodCantId = '橘园'

                    food.append(result)
                    print ("foodName:  foodWinName:  foodCantName:"), result.foodName, result.foodWinId, result.foodCantId
            else:
                print "empty results"
        except Exception, e:
            print e
        self.render("manageFood.html", food=food)

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
            if foodIsSpecial == 'on':
                foodIsSpecial = 'True'
            else:
                foodIsSpecial = 'False'

            try:
            #   pass
                new_food = Food(
                    foodName=foodName,
                    foodCantId=foodCantId,
                    foodWinId=foodWinId,
                    foodPrice=foodPrice,
                    foodIsSpecial=foodIsSpecial,
                )
                self.retjson['foodName'] = new_food.foodName
                self.retjson['foodCantId'] = new_food.foodCantId
                self.retjson['foodWinId'] = new_food.foodWinId
                self.retjson['foodPrice'] = new_food.foodPrice
                self.retjson['foodIsSpecial'] = new_food.foodIsSpecial
                #self.db.merge(new_food)
                #self.db.commit()
            except Exception, e:
                print e
        self.write(json.dumps(self.retjson, ensure_ascii=False, indent=2))
