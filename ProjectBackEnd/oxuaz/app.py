import re
from flask import Flask,render_template,redirect,request,url_for

xeber1=[

]
id=1

app=Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/xeber')
def posts():
    return render_template('xeber.html',xeber=xeber1)

@app.route('/single/<id>')
def single_post(id):
    for news in xeber1:
        if news['id']==int(id):
            return render_template('single.html',single=news)
    return redirect('/xeber')

@app.route('/admin')
def admin():
    return render_template('admin.html')   

@app.route('/admin/add',methods=['GET','POST'])
def add():
    if request.method=='POST':
        global id
        basliq=request.form['title']
        xulase=request.form['desc']
        metn=request.form['content']
     
        xeber={
             'id':id,
             'title':basliq,
             'desc':xulase,
             'content':metn
        }

        xeber1.append(xeber)
        id=id+1
        return redirect('/xeber')
    
    return render_template('add.html')

   

if __name__=='__main__':
    app.run(debug=True)