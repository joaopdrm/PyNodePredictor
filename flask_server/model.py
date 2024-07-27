from sklearn.linear_model import LinearRegression
import numpy as np
import joblib

# Dados fictícios para treinamento
X = np.array([[1], [2], [3], [4], [5]])
y = np.array([2, 4, 6, 8, 10])

# Treinando o modelo
model = LinearRegression()
model.fit(X,y)

# Salvando o modelo
joblib.dump(model, 'model.pkl')
print("Modelo salvo")