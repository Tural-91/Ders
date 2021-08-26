from flask import Flask,render_template,redirect,request,url_for

xeber=[
{       'id':1,
        'title':'“Neftçi” avrokuboklarla böyük hesablı məğlubiyyətlə vidalaşdı',
        'desc':'İsraildə keçirilən “Makkabi” (Hayfa) – “Neftçi” görüşü meydan sahibi komandanın 4:0 hesablı darmadağını ilə başa çatıb.',
        'content':'İsraildə keçirilən “Makkabi” (Hayfa) – “Neftçi” görüşü meydan sahibi komandanın 4:0 hesablı darmadağını ilə başa çatıb. Bununla da Avropa Konfrans Liqasının qrup mərhələsinə yəhudilər yollanib. “Neftçi” isə cari mövsüm avrokubok macərasını başa vurub.'

     },
{       'id':2,
        'title':'Kabildə yeni partlayışlar: Ölən ABŞ hərbçilərinin sayı artıb ',
        'desc':'Kabildə daha iki partlayış baş verib.',
        'content':'Bu barədə “Al Arabiya” məlumat yayıb. Məlumata əsasən, partlayış səsləri paytaxtın kənar məhəllərində eşidilib.Pentaqondan verilən məlumata görə, terror aktları nəticəsində 12 ABŞ hərbçisi ölüb.Onlardan 11-i dəniz piyadası, biri isə hərbi həkimdir.'

     },
{  
        'id':3,
        'title':'Bayden İsrail Baş naziri ilə görüşünü, Merkel isə İsrailə səfərini təxirə saldı',
        'desc':'Co Bayden ölkədə səfərdə olan İsrailin Baş naziri Naftali Bennetlə görüşünü təxirə salıb.',
        'content':'Kabil hava limanı yaxınlığında baş vermiş terror aktından sonra ABŞ prezidenti Co Bayden ölkədə səfərdə olan İsrailin Baş naziri Naftali Bennetlə görüşünü təxirə salıb.Bu barədə “Axios” məlumat yayıb. Almaniya kansleri Angela Merkel isə Əfqanıstandakı vəziyyətlə əlaqədar avqustun 28-nə nəzərdə tutulmuş İsrailə səfərini ləğv edib.'

     },
]

app=Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/xeber')
def posts():
    return render_template('xeber.html',xeber=xeber)

@app.route('/single/<id>')
def single_post(id):
    for news in xeber:
        if news['id']==int(id):
            return render_template('single.html',single=news)
    return redirect('/xeber')

if __name__=='__main__':
    app.run(debug=True)