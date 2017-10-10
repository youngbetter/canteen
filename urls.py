#!/usr/bin/env Python
# coding=utf-8
"""
the url structure of website
"""

from handlers.index import IndexHandler
from handlers.login import LoginHandler
from handlers.manageFood import ManageFoodHandler
from handlers.feedBack import FeedBackHandler
from handlers.statistics import StatisticsHandler
import sys
reload(sys)
#utf-8，兼容汉字
sys.setdefaultencoding("utf-8")


urls = [
    (r'/index', IndexHandler),
    (r'/login', LoginHandler),
    (r'/manageFood', ManageFoodHandler),
    (r'/feedBack', FeedBackHandler),
    (r'/statistics', StatisticsHandler),
]
