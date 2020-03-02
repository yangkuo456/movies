# coding:utf8
from flask import Flask,render_template
from flask_sqlalchemy import SQLAlchemy
import os

HOSTNAME = '127.0.0.1'
PORT = 3306
DATABASE = 'movie'
USERNAME = 'root'
PASSWORD = 'newpassword'
app = Flask(__name__)
DB_URI = "mysql+pymysql://{username}:{password}@{host}:{port}/{db}?charset=utf8".format(
    username=USERNAME,password=PASSWORD,host=HOSTNAME, port=PORT,db=DATABASE)

app.config['SQLALCHEMY_DATABASE_URI'] = DB_URI
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = True
app.config['SECRET_KEY']='299348add5c74f0198c7a77b5d7761dd'
app.config['UP_DIR']=os.path.join(os.path.abspath(os.path.dirname(__file__)),"static/uploads/")
app.config['FC_DIR']=os.path.join(os.path.abspath(os.path.dirname(__file__)),"static/uploads/users/")

# 1.连接数据库
app.debug = False
db = SQLAlchemy(app)

#在app文件中注册蓝图
from app.home import home as home_blueprint
from app.admin import admin as admin_blueprint

app.register_blueprint(home_blueprint)
app.register_blueprint(admin_blueprint,url_prefix="/admin")

@app.errorhandler(404)
def page_not_found(error):
    return render_template("home/404.html"),404

