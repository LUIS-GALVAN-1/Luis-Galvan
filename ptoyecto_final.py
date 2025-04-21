def clasificar_altura(altura):
    if 400 <= altura <= 800:
        return "sumamente apto"
    elif 801 <= altura <= 999 or altura < 400:
        return "moderadamente apto"
    elif 1000 <= altura <= 1200:
        return "marginalmente apto"
    else:
        return "no apto"

def clasificar_profundidad(profundidad):
    if profundidad > 100:
        return "sumamente apto"
    elif 50 <= profundidad <= 100:
        return "moderadamente apto"
    elif 25 <= profundidad < 50:
        return "marginalmente apto"
    else:
        return "no apto"

def peor_categoria(cat1, cat2):
    orden = ["sumamente apto", "moderadamente apto", "marginalmente apto", "no apto"]
    return cat1 if orden.index(cat1) > orden.index(cat2) else cat2

def main():
    n = int(input("Ingrese el número de lecturas: "))

    alturas = []
    profundidades = []

    conteo = {
        "sumamente apto": 0,
        "moderadamente apto": 0,
        "marginalmente apto": 0,
        "no apto": 0
    }

    for _ in range(n):
        altura = float(input("Ingrese la altura sobre el nivel del mar (msnm): "))
        profundidad = float(input("Ingrese la profundidad efectiva del suelo (cm): "))

        alturas.append(altura)
        profundidades.append(profundidad)

        cat_altura = clasificar_altura(altura)
        cat_profundidad = clasificar_profundidad(profundidad)
        final = cat_altura if cat_altura == cat_profundidad else peor_categoria(cat_altura, cat_profundidad)

        conteo[final] += 1

    promedio_altura = sum(alturas) / n
    promedio_profundidad = sum(profundidades) / n

    print(f"\n{promedio_altura:.2f}")
    print(f"{promedio_profundidad:.2f}")
    print(f"sumamente apto {conteo['sumamente apto']}")
    print(f"moderadamente apto {conteo['moderadamente apto']}")
    print(f"marginalmente apto {conteo['marginalmente apto']}")
    print(f"no apto {conteo['no apto']}")

if __name__ == "__main__":
    main()
