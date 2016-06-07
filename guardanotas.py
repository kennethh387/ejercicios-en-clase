notas = []
res = "si"
while res=="si":
	no=int(input("ingrese nota: "))
	notas.append(no)
	res=input("desea continuar si/no: ")

nota = open("notasguardadas.txt","w")
for no in notas :
	nota.write(str(notas)
	nota.write("\n")
nota.close()