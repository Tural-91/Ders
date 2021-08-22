from flask import Flask,render_template,request

Kitablar=[]

app=Flask(__name__)

@app.route('/create_book')
def create_book():
    if request.method == 'POST':
        Ad = request.form['Ad']
        Yazar = request.form['Yazar']
        Capili = request.form['Capili']
        Sehife = request.form['Sehife']
        Xulase = request.form['Xulase']
        Kitab = {
            'Ad': Ad,
            'Yazar': Yazar,
            'Capili': Capili,
            'Sehife': Sehife,
            'Xulase': Xulase
        }
        Kitablar.append(Kitab)

    return render_template('create_book.html')

@app.route('/show_books')
def show_books():
    return render_template('show_books.html', Kitablar=Kitablar)

@app.route('/single_book')
def single_book():
    return render_template('single_book.html')

@app.route('/admin_book')
def admin_book():
    return render_template('admin_book.html')

if __name__=='__main__':
    app.run(debug=True)