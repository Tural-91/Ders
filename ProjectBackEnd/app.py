programMenusu="""
    -----Program Menusu-----
    1-Qeydiyyatdan keçmək üçün 1 daxil edin
    2-Sistemə daxil olmaq üçün 2 daxil edin
    ------------------------
    """

istifadəçilər=[]

class istifadəçi:
 def __init__(self,_ad,_soyad,_email,_username,_password):
    self.ad=_ad
    self.soyad=_soyad
    self.email=_email
    self.username=_username
    self.password=_password
    istifadəçilər.append(self)
def məlumatlarıGöstər(self):
    print(f'{self.ad} | {self.soyad} | {self.email} | {self.username} | {self.password}')

def məlumatlarıGör():
    for istifadəçi in istifadəçilər:
        istifadəçi.məlumatlarıGöstər()

def QeydiyyatdanKeç():
    ad=input('Ad : ')
    soyad=input('Soyad : ')
    email=input('Email : ')
    username=input('Username : ')
    password=input('password : ')
    istifadəçi(ad,soyad,email,username,password)
    
def SisteməDaxilOl():
    username=input('Username : ')
    password=input('Password : ')

def MenuGöstər():
    print(programMenusu)
MenuGöstər()

while True:
    emr=input('Qeyd olunan rəqəmlərdən birini seçin :')
    if(emr=="1"):
        QeydiyyatdanKeç()
    elif(emr=="2"):
        SisteməDaxilOl()