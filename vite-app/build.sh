cp ./env/.env.${ENV} ./
tsc && vite build --mode ${ENV}
rm ./.env.${ENV}