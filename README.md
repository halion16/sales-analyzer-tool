# 📊 Sales Analyzer - Analizzatore Vendite Avanzato

![Version](https://img.shields.io/badge/version-2.0.0-blue)
![Status](https://img.shields.io/badge/status-production-green)
![License](https://img.shields.io/badge/license-proprietary-red)

## 🌐 **Demo Live**
**🔗 Applicazione Online:** [https://halion16.github.io/sales-analyzer-tool/](https://halion16.github.io/sales-analyzer-tool/)

---

## 📋 **Indice**
- [Descrizione](#-descrizione)
- [Funzionalità Principali](#-funzionalità-principali)
- [Guida Rapida](#-guida-rapida)
- [Timeline Evolution](#-timeline-evolution)
- [Pannello Amministratore](#-pannello-amministratore)
- [Formato Dati CSV](#-formato-dati-csv)
- [Guida Utente](#-guida-utente)
- [Configurazione Avanzata](#-configurazione-avanzata)
- [Risoluzione Problemi](#-risoluzione-problemi)
- [Supporto Tecnico](#-supporto-tecnico)

---

## 🎯 **Descrizione**

Sales Analyzer è un'applicazione web avanzata per l'analisi delle vendite retail con focus specifico sul settore fashion. L'applicazione offre strumenti professionali per il calcolo delle provvigioni, analisi temporali predittive e sistema di alert intelligenti per la gestione ottimale delle performance di vendita.

### **Settori di Applicazione**
- 🏪 **Retail Fashion** - Negozi di abbigliamento e accessori
- 👗 **Catene Multi-brand** - Gestione centralizzata di più punti vendita
- 📊 **Management Vendite** - Controllo performance e provvigioni
- 📈 **Business Intelligence** - Analisi predittive e trend stagionali

---

## 🚀 **Funzionalità Principali**

### **📈 Timeline Evolution**
Sistema di analisi temporale avanzato con algoritmi specifici per il retail fashion:
- **Predizioni Stagionali**: Algoritmi intelligenti che considerano i cicli stagionali del fashion
- **Deseasonalizzazione**: Rimozione della variabilità stagionale per identificare trend reali
- **Fattori Dinamici**: Modalità fissa o dinamica per adattarsi a diverse situazioni
- **Confidence Scoring**: Valutazione dell'affidabilità delle predizioni
- **Year-over-Year Analysis**: Confronti dettagliati anno su anno

### **💰 Calcolo Provvigioni Personalizzate**
- **Rate Individuali**: Percentuali personalizzabili per ogni operatore
- **Modalità Ibride**: Combinazione di rate default e personalizzate
- **Calcolo Real-time**: Aggiornamento istantaneo dei risultati
- **Export Dettagliati**: Report completi per amministrazione

### **⚠️ Sistema Alert Intelligenti**
- **Soglia Configurabile**: Amministratori possono impostare la sensibilità (5-50%)
- **Negozi in Difficoltà**: Identificazione automatica di performance problematiche
- **Preview Live**: Anteprima del numero di negozi interessati
- **Popover Dettagliati**: Lista completa con dati specifici

### **📊 Analisi Multi-Dimensionale**
- **Confronto Periodi**: Analisi comparative tra diversi mesi/anni
- **Metriche Semplificate**: 3 KPI essenziali invece di metriche complesse
- **Benchmark Stagionali**: Confronto con performance storiche
- **Top/Bottom Performers**: Identificazione automatica dei migliori e peggiori

### **📄 Export e Reporting**
- **PDF Professionale**: Report formattati per presentazioni
- **Timeline Charts**: Grafici interattivi per ogni negozio
- **Encoding Ottimizzato**: Supporto completo caratteri italiani
- **Layout Responsive**: Visualizzazione ottimale su ogni dispositivo

---

## ⚡ **Guida Rapida**

### **1. Caricamento Dati**
1. Clicca su **"Scegli File"** nella sezione "Carica File CSV"
2. Seleziona il file CSV con i dati di vendita
3. Attendi il messaggio di conferma caricamento

### **2. Configurazione Analisi**
1. **Modalità Calcolo**: Scegli tra "Percentuale Default" o "Percentuali Personalizzate"
2. **Modalità Analisi**: Seleziona tra:
   - **Singolo Periodo**: Analisi di un mese specifico
   - **Confronta Periodi**: Confronto tra due periodi
   - **Timeline Evolution**: Analisi temporale avanzata con predizioni

### **3. Esecuzione Analisi**
1. Clicca **"🔄 Calcola Risultati"**
2. Visualizza le metriche nella dashboard
3. Espandi i negozi per dettagli operatori

### **4. Configurazione Admin (Opzionale)**
1. Nella sezione "Impostazioni Alert"
2. Modifica la **Soglia calo** per negozi in difficoltà
3. Clicca **"✅ Applica"** per salvare

---

## 📈 **Timeline Evolution - Guida Avanzata**

### **Algoritmi Implementati**

#### **Deseasonalizzazione**
```
Trend Deseasonalizzato = Vendite Reali / Fattore Stagionale
```

#### **Predizione Stagionale**
```
Predizione Finale = Trend Base × Fattore Stagionale × Vincolo YoY
```

#### **Fattori Stagionali Fashion**
- **Gennaio**: 0.90 (post-Natale, saldi invernali)
- **Febbraio**: 0.85 (periodo morto)
- **Marzo**: 0.95 (pre-primavera)
- **Aprile**: 1.05 (collezioni primavera)
- **Maggio**: 1.00 (stabile)
- **Giugno**: 0.95 (pre-saldi)
- **Luglio**: 0.90 (saldi estivi)
- **Agosto**: 0.85 (ferie)
- **Settembre**: 1.10 (rientro, nuove collezioni)
- **Ottobre**: 1.05 (collezioni autunno)
- **Novembre**: 1.00 (pre-Black Friday)
- **Dicembre**: 1.10 (picco natalizio)

### **Modalità Stagionalità**

#### **🔧 Modalità Fissa**
- Fattori stagionali predefiniti e costanti
- Ideale per business consolidati con pattern stabili
- Maggiore predicibilità

#### **⚙️ Modalità Dinamica**
- Fattori calcolati dinamicamente dai dati storici
- Adattamento automatico ai trend dell'azienda
- Maggiore precisione per business in evoluzione

### **Confidence Levels**
- **🟢 Alta (R² > 0.7)**: Predizioni molto affidabili
- **🟡 Media (R² 0.4-0.7)**: Predizioni moderatamente affidabili
- **🔴 Bassa (R² < 0.4)**: Predizioni da considerare con cautela

---

## 🎛️ **Pannello Amministratore**

### **Configurazione Soglie Alert**

#### **Accesso**
Il pannello admin è visibile nella sezione "Impostazioni Alert - Negozi in Difficoltà" sotto i controlli principali.

#### **Configurazione Soglia**
1. **Input Range**: 5% - 50%
2. **Preview Live**: Mostra quanti negozi sarebbero interessati
3. **Validazione**: Impedisce valori fuori range
4. **Persistenza**: Salvataggio automatico in localStorage

#### **Funzioni Disponibili**
- **✅ Applica**: Salva e applica immediatamente la nuova soglia
- **🔄 Reset**: Ripristina il valore default (20%)
- **Ricalcolo**: Opzione per ricalcolare immediatamente i risultati

#### **Esempi di Configurazione**
- **Soglia 15%**: Alta sensibilità, identifica problemi precoci
- **Soglia 20%**: Sensibilità standard (default)
- **Soglia 30%**: Bassa sensibilità, solo problemi gravi
- **Soglia 40%**: Molto bassa sensibilità, solo crisi severe

---

## 📋 **Formato Dati CSV**

### **Struttura Richiesta**
Il file CSV deve contenere le seguenti colonne obbligatorie:

```csv
operatore,codDep,periodo,importo,nrTrans
```

### **Descrizione Campi**
- **operatore**: Nome dell'operatore/venditore (stringa)
- **codDep**: Codice del punto vendita/negozio (stringa)
- **periodo**: Periodo nel formato YYYY-MM (es: 2024-01)
- **importo**: Vendite in euro (numero decimale)
- **nrTrans**: Numero di transazioni (numero intero)

### **Esempio File CSV**
```csv
operatore,codDep,periodo,importo,nrTrans
Mario Rossi,0040-MOLFETTA,2024-01,25000.50,45
Mario Rossi,0040-MOLFETTA,2024-02,28000.75,52
Lucia Bianchi,0063-MARCIANISE,2024-01,32000.00,38
Lucia Bianchi,0063-MARCIANISE,2024-02,29500.25,41
```

### **Note Importanti**
- **Separatore**: Virgola (,)
- **Encoding**: UTF-8 con BOM
- **Decimali**: Punto (.) come separatore decimale
- **Date**: Formato YYYY-MM obbligatorio
- **Header**: Prima riga deve contenere i nomi delle colonne

---

## 👤 **Guida Utente Dettagliata**

### **Step 1: Preparazione Dati**
1. Esporta i dati dal tuo sistema gestionale
2. Verifica che il CSV rispetti il formato richiesto
3. Controlla che non ci siano celle vuote o caratteri speciali

### **Step 2: Caricamento**
1. Apri l'applicazione: [Sales Analyzer](https://halion16.github.io/sales-analyzer-tool/)
2. Vai al tab **"📁 Carica Dati CSV"**
3. Clicca **"Scegli File"** e seleziona il tuo CSV
4. Attendi il messaggio **"✅ Dati caricati con successo"**

### **Step 3: Configurazione Percentuali (Opzionale)**
1. Vai al tab **"⚙️ Configura Percentuali"**
2. Imposta la **Percentuale Default** (es: 0.78%)
3. Personalizza percentuali per operatori specifici:
   - Cerca l'operatore
   - Clicca **"Modifica"**
   - Inserisci la nuova percentuale
   - Clicca **"Salva"**

### **Step 4: Analisi dei Risultati**
1. Vai al tab **"📊 Visualizza Risultati"**
2. Seleziona la **Modalità Analisi**:

#### **🔍 Singolo Periodo**
- Analisi dettagliata di un mese specifico
- Ideale per review mensili

#### **📊 Confronta Periodi**
- Confronto tra due mesi/anni
- Perfetto per analisi comparative

#### **📈 Timeline Evolution**
- Analisi completa con predizioni
- Raccomandato per pianificazione strategica

### **Step 5: Interpretazione Metriche**

#### **Dashboard Metriche**
- **📈 Trend Anno/Anno**: Crescita complessiva YoY
- **🌡️ vs Benchmark Storico**: Confronto con performance storiche
- **⚠️ Negozi in Difficoltà**: Alert configurabili (click per dettagli)
- **📊 Negozi Totali**: Numero totale analizzati
- **🏆 Top Crescita**: Negozio con migliore performance
- **⚠️ Maggiore Calo**: Negozio con performance più critica

#### **Dettagli Negozio**
- **Vendite Totali**: Fatturato del periodo
- **Provvigioni**: Calcolo basato sui rate configurati
- **N° Operatori**: Numero venditori attivi
- **Avg per Operatore**: Media provvigioni per venditore

### **Step 6: Export e Reporting**
1. Clicca **"📄 Esporta PDF"** per generare report
2. Il PDF include:
   - Metriche di sintesi
   - Dettaglio per negozio
   - Timeline charts (in modalità Timeline Evolution)
   - Performance operatori

---

## ⚙️ **Configurazione Avanzata**

### **Personalizzazione Rate Provvigioni**

#### **Rate Default**
- Impostabile globalmente per tutti gli operatori
- Valore percentuale (es: 0.78 = 0.78%)
- Applicato automaticamente a nuovi operatori

#### **Rate Personalizzati**
- Configurabili per ogni singolo operatore
- Override del rate default
- Evidenziati visivamente nei risultati

#### **Gestione Rate**
```javascript
// Rate salvati in localStorage
customRates = {
    "Mario Rossi": 0.85,
    "Lucia Bianchi": 0.90,
    "Giuseppe Verdi": 0.75
}
```

### **Configurazioni Timeline Evolution**

#### **Parametri Stagionalità**
- **Soglia minima dati**: 6 periodi per predizioni affidabili
- **Vincolo crescita YoY**: Massimo 15% annuo
- **Range predizioni realistiche**: 30% - 200% del valore attuale

#### **Algoritmi di Validazione**
- **R² minimo**: 0.4 per confidence "media"
- **Data points**: Minimo 3 anni per benchmark stagionali
- **Outlier detection**: Rimozione automatica valori anomali

### **Ottimizzazioni Performance**
- **Caching**: LocalStorage per rate e impostazioni
- **Rendering**: Tabelle virtualizzate per grandi dataset
- **Calcoli**: Algoritmi ottimizzati per elaborazione real-time

---

## 🔧 **Risoluzione Problemi**

### **Problemi Comuni**

#### **❌ "Errore nel caricamento del file CSV"**
**Cause possibili:**
- File non in formato CSV
- Encoding non corretto
- Colonne mancanti o rinominate

**Soluzioni:**
1. Verifica formato file (.csv)
2. Apri con Excel e salva come "CSV UTF-8"
3. Controlla nomi colonne: `operatore,codDep,periodo,importo,nrTrans`

#### **❌ "Dati mancanti per Timeline Evolution"**
**Cause possibili:**
- Meno di 6 periodi di dati
- Periodi non consecutivi
- Formato date non valido

**Soluzioni:**
1. Aggiungi più periodi storici
2. Verifica formato date: YYYY-MM
3. Completa eventuali mesi mancanti

#### **❌ "Predizioni non affidabili"**
**Cause possibili:**
- Dati troppo variabili
- Outlier nel dataset
- Business non stagionale

**Soluzioni:**
1. Pulisci i dati da valori anomali
2. Aumenta il periodo di analisi
3. Considera modalità "Singolo Periodo"

#### **❌ "Alert negozi non aggiornati"**
**Cause possibili:**
- Soglia admin non applicata
- Cache browser
- Calcolo non rieseguito

**Soluzioni:**
1. Clicca "✅ Applica" nelle impostazioni admin
2. Ricarica pagina (F5)
3. Riesegui "🔄 Calcola Risultati"

### **Performance Issues**

#### **⚠️ App lenta con file grandi**
**Ottimizzazioni:**
- Dividi file in periodi più piccoli
- Filtra negozi specifici
- Usa browser moderni (Chrome, Firefox)

#### **⚠️ Export PDF fallisce**
**Soluzioni:**
- Disabilita popup blocker
- Prova con meno dati
- Aggiorna browser

### **Compatibilità Browser**
- ✅ **Chrome 80+**: Completamente supportato
- ✅ **Firefox 75+**: Completamente supportato
- ✅ **Safari 13+**: Completamente supportato
- ✅ **Edge 80+**: Completamente supportato
- ❌ **Internet Explorer**: Non supportato

---

## 📞 **Supporto Tecnico**

### **Informazioni Versione**
- **Versione Corrente**: 2.0.0
- **Ultimo Update**: Settembre 2024
- **Tecnologie**: HTML5, JavaScript ES6, jsPDF
- **Hosting**: GitHub Pages

### **Segnalazione Bug**
Per segnalare problemi o richiedere funzionalità:

1. **Repository GitHub**: [halion16/sales-analyzer-tool](https://github.com/halion16/sales-analyzer-tool)
2. **Issues**: Usa la sezione Issues del repository
3. **Template segnalazione**:
   ```
   **Descrizione problema:**
   [Descrivi il problema riscontrato]

   **Passi per riprodurre:**
   1. [Primo passo]
   2. [Secondo passo]
   3. [...]

   **Comportamento atteso:**
   [Cosa dovrebbe accadere]

   **Browser e versione:**
   [es: Chrome 91.0.4472.124]

   **File CSV:**
   [Se possibile, allega esempio anonimizzato]
   ```

### **FAQ Tecniche**

#### **Q: I dati sono sicuri?**
A: Sì, tutti i dati sono elaborati localmente nel browser. Nessun dato viene inviato a server esterni.

#### **Q: Posso usare l'app offline?**
A: Dopo il primo caricamento, l'app è disponibile offline. I dati sono salvati nel localStorage del browser.

#### **Q: Ci sono limiti di dimensione file?**
A: Il limite dipende dalla memoria del browser. Consigliato max 10MB per performance ottimali.

#### **Q: Posso personalizzare i fattori stagionali?**
A: Attualmente i fattori sono predefiniti per il retail fashion. Personalizzazioni richiedono modifiche al codice.

### **Roadmap Futura**
- 📊 **Dashboard Avanzate**: Grafici interattivi aggiuntivi
- 🔄 **API Integration**: Connessione diretta a sistemi gestionali
- 📱 **Mobile App**: Versione nativa per dispositivi mobili
- 🤖 **Machine Learning**: Predizioni più accurate con AI
- 🌍 **Multi-lingua**: Supporto per altre lingue

---

## 📄 **Note Legali**

### **Licenza**
Questo software è proprietario e riservato. Tutti i diritti sono riservati.

### **Privacy**
L'applicazione non raccoglie, memorizza o trasmette dati personali a terze parti. Tutti i dati sono elaborati localmente nel browser dell'utente.

### **Disclaimer**
Le predizioni e analisi fornite sono basate su algoritmi statistici e devono essere considerate come supporto decisionale. Non sostituiscono il giudizio professionale e l'analisi approfondita del business.

---

**📊 Sales Analyzer** - *Powered by Timeline Evolution Technology*

*Ultimo aggiornamento documentazione: Settembre 2024*