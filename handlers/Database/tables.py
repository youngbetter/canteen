# -*- coding: utf-8 -*-

from sqlalchemy import create_engine, Table, Column, Integer, String, MetaData, ForeignKey, DateTime, Boolean
from sqlalchemy.types import CHAR, Integer, VARCHAR, Boolean, Float, Text
from sqlalchemy.sql.functions import func
from models import Base
import sys

reload(sys)


# from models import engine

# 每个类对应一个表
class User(Base):
    __tablename__ = 'User'

    userId = Column(Integer, nullable=False, primary_key=True)
    userTel = Column(CHAR(11), nullable=False, unique=True)
    userPsw = Column(VARCHAR(16), nullable=False)
    userNick = Column(VARCHAR(24), nullable=False, unique=True)
    userImgUrl = Column(VARCHAR(256))

class Canteen(Base):
    __tablename__ = 'Canteen'

    cantId = Column(Integer, nullable=False, primary_key=True)
    cantType = Column(Integer, default=1, nullable=False)                       #0-桃园，1-梅园，2-橘园
    cantName = Column(VARCHAR(24), default='梅园', nullable=False)
    cantManagerName = Column(VARCHAR(24), default='', nullable=True)
    cantManagerTel = Column(CHAR(11), nullable=True)

class Windows(Base):
    __tablename__ = 'Windows'

    winId = Column(Integer, nullable=False, primary_key=True)
    winName = Column(VARCHAR(24), nullable=False)
    winCantType = Column(Integer, default=1)
    winDes = Column(VARCHAR(256), nullable=False)
    winImgUrl = Column(VARCHAR(256), nullable=False)

class Images(Base):
    __tablename__ = 'Images'

    imgId = Column(Integer, nullable=False, primary_key=True)
    imgType = Column(Integer, default=2)                                        #0-userImgs,1-winImgs,2-foodImgs,3-dynamicImgs
    imgUrl = Column(VARCHAR(256), nullable=False)

class Food(Base):
    __tablename__ = 'Food'

    foodId = Column(Integer, nullable=False, primary_key=True)
    foodName = Column(VARCHAR(24), nullable=False)
    foodCantId = Column(Integer, ForeignKey('Canteen.cantId', onupdate='CASCADE'), nullable=False)
    foodWinId = Column(Integer, ForeignKey('Windows.winId', onupdate='CASCADE'), nullable=False)
    foodPrice = Column(VARCHAR(24), default='')
    foodCmtNum = Column(Integer, default=0)
    foodGrade = Column(Float, default=0)
    foodIsSpecial = Column(Boolean, default=False)
    foodImgUrl = Column(VARCHAR(256), nullable=False)
