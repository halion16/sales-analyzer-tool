# 👤 Guida Utente - Sales Analyzer

## 📖 Indice
1. [Primo Accesso](#primo-accesso)
2. [Caricamento Dati](#caricamento-dati)
3. [Configurazione Provvigioni](#configurazione-provvigioni)
4. [Analisi Singolo Periodo](#analisi-singolo-periodo)
5. [Confronto Periodi](#confronto-periodi)
6. [Timeline Evolution](#timeline-evolution)
7. [Interpretazione Risultati](#interpretazione-risultati)
8. [Export PDF](#export-pdf)
9. [Configurazione Admin](#configurazione-admin)
10. [Tips & Tricks](#tips--tricks)

---

## 🚀 Primo Accesso

### **Accesso all'Applicazione**
1. Apri il browser (Chrome, Firefox, Safari o Edge)
2. Vai a: **https://halion16.github.io/sales-analyzer-tool/**
3. Clicca **"🔄 Avvia Sales Analyzer"**

### **Interfaccia Principale**
L'applicazione è organizzata in **3 tab principali**:
- **📁 Carica Dati CSV**: Per importare i dati di vendita
- **⚙️ Configura Percentuali**: Per impostare le provvigioni
- **📊 Visualizza Risultati**: Per analizzare i risultati

---

## 📁 Caricamento Dati

### **Step 1: Preparare il File CSV**

#### **Formato Richiesto**
Il file CSV deve avere questa struttura:
```csv
operatore,codDep,periodo,importo,nrTrans
Mario Rossi,0040-MOLFETTA,2024-01,25000.50,45
Mario Rossi,0040-MOLFETTA,2024-02,28000.75,52
Lucia Bianchi,0063-MARCIANISE,2024-01,32000.00,38
```

#### **Descrizione Campi**
- **operatore**: Nome del venditore
- **codDep**: Codice del negozio
- **periodo**: Anno-Mese (formato: 2024-01)
- **importo**: Vendite in euro
- **nrTrans**: Numero di transazioni

### **Step 2: Importare i Dati**
1. Vai al tab **"📁 Carica Dati CSV"**
2. Clicca **"Scegli File"**
3. Seleziona il tuo file CSV
4. Attendi il messaggio: **"✅ Dati caricati con successo"**

#### **⚠️ Messaggi di Errore Comuni**
- **"File non valido"**: Verifica che sia un file .csv
- **"Colonne mancanti"**: Controlla i nomi delle colonne
- **"Formato data non valido"**: Usa il formato YYYY-MM

### **Step 3: Verifica Caricamento**
Dopo il caricamento vedrai:
- **Numero record**: Quante righe sono state importate
- **Periodi trovati**: Quali mesi sono presenti
- **Negozi trovati**: Quanti punti vendita ci sono

---

## ⚙️ Configurazione Provvigioni

### **Percentuale Default**

#### **Impostazione Globale**
1. Vai al tab **"⚙️ Configura Percentuali"**
2. Nel campo **"Percentuale Default"** inserisci il valore base (es: 0.78)
3. Questo rate sarà applicato a tutti gli operatori senza personalizzazione

#### **Applicazione Rapida**
- **📄 Applica Default a Tutti**: Applica il rate default a tutti
- **🔄 Reset**: Rimuove tutte le personalizzazioni
- **💾 Salva Configurazione**: Salva le impostazioni correnti

### **Percentuali Personalizzate**

#### **Ricerca Operatore**
1. Usa il campo **"🔍 Cerca Dipendente"**
2. Digita il nome dell'operatore
3. La lista si filtrerà automaticamente

#### **Modifica Rate Individuale**
1. Trova l'operatore nella lista
2. Clicca **"Modifica"** nella sua riga
3. Inserisci la nuova percentuale
4. Clicca **"Salva"** per confermare

#### **Gestione Rate**
- **Rate personalizzati** sono evidenziati in **giallo**
- **Rate default** sono mostrati normalmente
- Puoi **rimuovere** le personalizzazioni cliccando **"Rimuovi"**

### **💡 Esempi Pratici**

#### **Scenario 1: Rate Uniforme**
- Percentuale Default: **0.80%**
- Tutti gli operatori: **0.80%**
- Nessuna personalizzazione

#### **Scenario 2: Rate Differenziati**
- Percentuale Default: **0.75%**
- Senior Manager: **1.00%**
- Venditori Junior: **0.60%**
- Venditori Standard: **0.75%** (default)

---

## 📊 Analisi Singolo Periodo

### **Quando Usarla**
- Analisi mensile di routine
- Focus su un periodo specifico
- Prima analisi di un nuovo dataset

### **Configurazione**
1. Vai al tab **"📊 Visualizza Risultati"**
2. **Modalità Calcolo**: Scegli tra Default o Personalizzate
3. **Modalità Analisi**: Seleziona **"Singolo Periodo"**
4. **Periodo**: Scegli il mese da analizzare
5. **Filtro Negozio** (opzionale): Analizza solo un negozio specifico

### **Interpretazione Risultati**

#### **Dashboard Metriche**
Al top vedrai le metriche principali:
- **💰 Vendite Totali**: Fatturato del periodo
- **🏆 Provvigioni Totali**: Somma di tutte le provvigioni
- **👥 Operatori Attivi**: Numero venditori nel periodo
- **🔢 Transazioni**: Numero totale di vendite

#### **Dettaglio per Negozio**
Ogni negozio mostra:
- **🏪 Nome/Codice**: Identificativo del punto vendita
- **💰 Venduto Totale**: Fatturato del negozio
- **🏆 Provvigioni**: Totale provvigioni del negozio
- **👥 Operatori**: Numero venditori attivi
- **📊 % nel Dataset**: Percentuale sul totale

#### **Dettaglio Operatori**
Espandendo un negozio vedi:
- **👤 Operatore**: Nome del venditore
- **⚙️ % Rate**: Percentuale applicata
- **💰 Venduto**: Vendite dell'operatore
- **🏆 Provvigione**: Provvigione calcolata
- **📊 % nel Negozio**: Peso nel negozio

---

## 📊 Confronto Periodi

### **Quando Usarlo**
- Confronti mese vs mese
- Analisi anno su anno
- Valutazione crescita/declino

### **Configurazione**
1. **Modalità Analisi**: Seleziona **"Confronta Periodi"**
2. **Periodo A**: Scegli il primo periodo
3. **Periodo B**: Scegli il secondo periodo
4. I periodi possono essere di anni diversi

### **Risultati Comparativi**

#### **Dashboard Comparativa**
- **📈 Crescita Complessiva**: Variazione percentuale totale
- **🏆 Miglior Crescita**: Negozio con maggiore incremento
- **📉 Maggior Declino**: Negozio con maggiore calo

#### **Tabella Confronto**
Per ogni operatore vedrai:
- **Periodo A**: Vendite e provvigioni primo periodo
- **Periodo B**: Vendite e provvigioni secondo periodo
- **📈 Crescita**: Variazione percentuale

#### **🎨 Codici Colore**
- **🟢 Verde**: Crescita positiva
- **🔴 Rosso**: Declino
- **🟡 Giallo**: Variazioni minime

---

## 📈 Timeline Evolution

### **Funzionalità Avanzata**
La Timeline Evolution è la modalità più potente, ideale per:
- **Pianificazione strategica**
- **Predizioni stagionali**
- **Analisi multi-periodo**
- **Identificazione trend**

### **Configurazione**
1. **Modalità Analisi**: Seleziona **"Timeline Evolution"**
2. **Modalità Stagionalità**:
   - **🔧 Fissa**: Fattori predefiniti per fashion retail
   - **⚙️ Dinamica**: Fattori calcolati dai tuoi dati

### **Dashboard Avanzate**

#### **📊 Metriche Timeline**
- **📈 Trend Anno/Anno**: Crescita media YoY
- **🌡️ vs Benchmark Storico**: Confronto con medie storiche
- **⚠️ Negozi in Difficoltà**: Alert automatici (configurabili)
- **🏆 Top Crescita**: Migliore performer
- **⚠️ Maggiore Calo**: Negozio più in difficoltà

#### **🏪 Card Negozi Evolute**
Ogni negozio mostra:
- **💰 Totale Periodo**: Vendite cumulative
- **📈 Crescita Media**: Trend mensile medio
- **📊 Trend YoY**: Crescita anno su anno specifico

### **📈 Timeline Charts**
Espandendo un negozio vedrai:
- **Grafico temporale**: Andamento mese per mese
- **Barre di predizione**: Proiezioni future
- **Confidence indicator**: Affidabilità predizioni

### **📋 Tabella Dettagliata**
Per ogni mese:
- **📅 Periodo**: Anno-Mese
- **💰 Vendite**: Fatturato del mese
- **🏆 Provvigioni**: Provvigioni del mese
- **👥 Operatori**: Numero venditori attivi
- **🔢 Transazioni**: Numero vendite
- **📈 Crescita vs Prec.**: Crescita mese precedente
- **📊 Trend YoY**: Crescita stesso mese anno precedente

---

## 🔍 Interpretazione Risultati

### **Metriche di Performance**

#### **🎯 KPI Principali**
- **ROI Provvigioni**: Rapporto provvigioni/vendite
- **Performance per Operatore**: Vendite medie per venditore
- **Trend Growth**: Direzione della crescita

#### **⚠️ Segnali di Attenzione**
- **Declino YoY > 20%**: Negozio in difficoltà (soglia configurabile)
- **Operatori sotto-performance**: Vendite significativamente sotto la media
- **Stagionalità anomala**: Trend diversi dai pattern normali

### **📊 Analisi Predittive (Timeline Evolution)**

#### **🎨 Codici Confidence**
- **🟢 Verde**: Alta affidabilità (R² > 0.7)
- **🟡 Giallo**: Media affidabilità (R² 0.4-0.7)
- **🔴 Rosso**: Bassa affidabilità (R² < 0.4)

#### **🔮 Interpretazione Predizioni**
- **Trend crescente**: Continua investimenti
- **Trend stabile**: Mantieni status quo
- **Trend calante**: Interventi correttivi necessari

### **📈 Benchmark Stagionali**
- **Above Normal**: Performance sopra la media storica
- **Normal**: Performance in linea con aspettative
- **Below Normal**: Performance sotto le aspettative

---

## 📄 Export PDF

### **Generazione Report**
1. Dopo aver calcolato i risultati
2. Clicca **"📄 Esporta PDF"**
3. Scegli nome file e posizione
4. Il PDF si scaricherà automaticamente

### **Contenuto Report**

#### **📋 Sezione Executive Summary**
- Data di generazione
- Periodo analizzato
- Metriche chiave

#### **📊 Sezione Dettagli**
- Performance per negozio
- Dettaglio operatori
- Timeline charts (se modalità Timeline Evolution)

#### **🎨 Formattazione Professionale**
- Logo e header aziendali
- Colori per trend positivi/negativi
- Tabelle formattate
- Grafici integrati

### **💡 Tips per Export**
- **Performance**: Usa filtri per negozi specifici se il PDF è troppo grande
- **Compatibilità**: Il PDF è ottimizzato per stampa A4
- **Encoding**: Supporta completamente caratteri italiani

---

## 🎛️ Configurazione Admin

### **Accesso Pannello**
Il pannello admin è nella sezione **"⚙️ Impostazioni Alert - Negozi in Difficoltà"**

### **Configurazione Soglia Alert**

#### **🎯 Impostazione Soglia**
1. **Input Range**: Da 5% a 50%
2. **Anteprima Live**: Mostra numero negozi interessati
3. **Validazione**: Controllo valori in tempo reale

#### **⚙️ Funzioni Disponibili**
- **✅ Applica**: Salva e applica la nuova soglia
- **🔄 Reset**: Ripristina default (20%)
- **Ricalcolo**: Opzione per rielaborare immediatamente

#### **📊 Esempi Configurazione**

##### **Settore Fashion - Alta Stagione**
- **Soglia**: 15%
- **Rationale**: Maggiore sensibilità durante picchi di vendita

##### **Settore Fashion - Bassa Stagione**
- **Soglia**: 30%
- **Rationale**: Tolleranza maggiore durante periodi storicamente deboli

##### **Business Stabile**
- **Soglia**: 20% (default)
- **Rationale**: Sensibilità standard per business consolidati

### **💾 Persistenza Dati**
- Le impostazioni sono salvate nel browser
- Ripristinate automaticamente ad ogni accesso
- Backup consigliato delle configurazioni

---

## 💡 Tips & Tricks

### **🚀 Ottimizzazione Performance**

#### **File CSV Grandi**
- **Dividi per anno**: Carica un anno alla volta
- **Filtra negozi**: Analizza gruppi di negozi
- **Pulizia dati**: Rimuovi record duplicati

#### **Browser Performance**
- **Chiudi tab inutili**: Libera memoria
- **Cache pulita**: Cancella cache se problemi
- **Browser aggiornato**: Usa versioni recenti

### **📊 Analisi Efficaci**

#### **Timeline Evolution**
- **Minimo 6 mesi**: Per predizioni affidabili
- **Dati consecutivi**: Evita gap nei periodi
- **Pulizia outlier**: Rimuovi valori anomali

#### **Confronti Periodi**
- **Stesso mese**: Confronta sempre stesso mese di anni diversi
- **Stagionalità**: Considera i cicli del tuo business
- **Contest esterno**: Ricorda eventi che possono influire

### **🎯 Best Practices**

#### **Preparazione Dati**
- **Backup originale**: Sempre prima di modificare
- **Nomi consistenti**: Stesso nome operatore in tutti i record
- **Codici standardizzati**: Formato uniforme per codici negozio

#### **Configurazione Provvigioni**
- **Documenta rate**: Tieni traccia delle personalizzazioni
- **Review periodiche**: Rivedi rate ogni trimestre
- **Test configurazioni**: Verifica con dati di test

#### **Interpretazione Risultati**
- **Context awareness**: Considera eventi esterni
- **Trend validation**: Conferma trend con dati qualitativi
- **Action planning**: Traduci analisi in azioni concrete

### **🔧 Risoluzione Rapida Problemi**

#### **CSV Non Si Carica**
```
1. Apri con Excel
2. Salva come "CSV UTF-8 (*.csv)"
3. Verifica nomi colonne identici
4. Riprova caricamento
```

#### **Predizioni Non Affidabili**
```
1. Aumenta periodi analisi (>12 mesi)
2. Verifica continuità dati
3. Considera modalità "Singolo Periodo"
4. Pulisci valori anomali
```

#### **Export PDF Fallisce**
```
1. Disabilita popup blocker
2. Riduci dataset (filtri)
3. Prova browser diverso
4. Verifica spazio disco
```

### **📱 Mobile & Tablet**
- **Responsive**: Ottimizzato per tutti i dispositivi
- **Touch friendly**: Interfaccia touch-optimized
- **Landscape**: Usa orientamento orizzontale per tabelle

---

## 📞 Supporto

### **🆘 Supporto Immediato**
- **F5**: Ricarica pagina per problemi temporanei
- **Ctrl+Shift+R**: Hard refresh con pulizia cache
- **Modalità incognito**: Test senza dati salvati

### **📧 Segnalazione Problemi**
Per problemi persistenti, fornisci:
- **Browser e versione**
- **Passi per riprodurre**
- **Screenshot dell'errore**
- **File CSV anonimizzato** (se possibile)

### **🔄 Aggiornamenti**
L'app si aggiorna automaticamente. Per forzare aggiornamento:
1. **F5** per ricaricare
2. Verifica versione in fondo alla pagina
3. Confronta con versione documentazione

---

**📊 Sales Analyzer** - *La tua soluzione completa per l'analisi delle vendite*

*Ultimo aggiornamento: Settembre 2024*