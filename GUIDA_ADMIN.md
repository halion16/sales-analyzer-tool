# 🎛️ Guida Amministratore - Sales Analyzer

## 📖 Indice
1. [Panoramica Admin](#panoramica-admin)
2. [Configurazione Soglie Alert](#configurazione-soglie-alert)
3. [Gestione Rate Provvigioni](#gestione-rate-provvigioni)
4. [Monitoraggio Performance](#monitoraggio-performance)
5. [Gestione Utenti](#gestione-utenti)
6. [Backup e Sicurezza](#backup-e-sicurezza)
7. [Risoluzione Problemi Avanzata](#risoluzione-problemi-avanzata)
8. [Best Practices](#best-practices)

---

## 🎯 Panoramica Admin

### **Ruolo dell'Amministratore**
L'amministratore di Sales Analyzer ha la responsabilità di:
- **Configurare soglie alert** per negozi in difficoltà
- **Gestire rate provvigioni** globali e personalizzati
- **Monitorare performance** dell'applicazione
- **Supportare utenti** nella risoluzione problemi
- **Mantenere standard** di qualità dei dati

### **Accessi Amministrativi**
- **Pannello Soglie**: Configurazione alert negozi in difficoltà
- **Configurazione Rate**: Gestione provvigioni globali
- **localStorage Admin**: Gestione impostazioni persistenti
- **Browser DevTools**: Debug e troubleshooting avanzato

---

## ⚠️ Configurazione Soglie Alert

### **Accesso al Pannello**
Il pannello amministrativo si trova nella sezione **"⚙️ Impostazioni Alert - Negozi in Difficoltà"** sotto i controlli principali dell'applicazione.

### **Parametri Configurabili**

#### **🎯 Soglia Calo (%)**
- **Range**: 5% - 50%
- **Default**: 20%
- **Persistenza**: localStorage del browser
- **Applicazione**: Immediate o al prossimo calcolo

#### **📊 Anteprima Live**
```
Anteprima: negozi con calo > 25% (3 negozi interessati)
```
La preview mostra in tempo reale quanti negozi sarebbero classificati come "in difficoltà" con la soglia impostata.

### **Strategie di Configurazione**

#### **🏢 Configurazione per Settore**

##### **Fashion Retail - Stagione Alta**
```yaml
Soglia: 15%
Rationale: Alta sensibilità durante picchi di vendita
Periodo: Settembre-Dicembre, Marzo-Maggio
Benefici: Identificazione precoce di problemi
```

##### **Fashion Retail - Stagione Bassa**
```yaml
Soglia: 30%
Rationale: Tolleranza per variabilità stagionale
Periodo: Gennaio-Febbraio, Luglio-Agosto
Benefici: Riduzione falsi positivi
```

##### **Business Non-Stagionale**
```yaml
Soglia: 20%
Rationale: Sensibilità bilanciata per business stabili
Periodo: Anno intero
Benefici: Configurazione standard affidabile
```

#### **📈 Configurazione per Context**

##### **Periodo di Crescita**
- **Soglia**: 10-15%
- **Obiettivo**: Massima sensibilità per non perdere opportunità

##### **Periodo di Crisi**
- **Soglia**: 35-40%
- **Obiettivo**: Focus solo su situazioni critiche

##### **Periodo Stabile**
- **Soglia**: 20-25%
- **Obiettivo**: Bilanciamento tra sensibilità e rumore

### **Implementazione Tecnica**

#### **🔧 Funzioni Core**
```javascript
// Recupero soglia configurata
function getProblemShopsThreshold() {
    const stored = localStorage.getItem('problemShopsThreshold');
    return stored ? parseInt(stored) : 20; // default 20%
}

// Impostazione soglia
function setProblemShopsThreshold(threshold) {
    localStorage.setItem('problemShopsThreshold', threshold.toString());
}

// Validazione input
function validateThreshold(threshold) {
    return threshold >= 5 && threshold <= 50;
}
```

#### **💾 Persistenza Dati**
```json
{
    "problemShopsThreshold": "25",
    "lastModified": "2024-09-17T10:30:00Z",
    "modifiedBy": "admin"
}
```

### **Processo di Modifica**

#### **🔄 Workflow Standard**
1. **Analisi Current State**: Verifica impatto soglia attuale
2. **Definizione Nuova Soglia**: Basata su business requirements
3. **Preview Testing**: Visualizza impatto con anteprima
4. **Applicazione**: Conferma e salvataggio
5. **Ricalcolo** (opzionale): Aggiornamento immediato risultati
6. **Monitoring**: Verifica efficacia nel tempo

#### **⚡ Applicazione Immediata**
```javascript
function applyThresholdSettings() {
    const threshold = parseInt(document.getElementById('problemThreshold').value);

    // Validazione
    if (threshold < 5 || threshold > 50) {
        alert('⚠️ La soglia deve essere tra 5% e 50%');
        return;
    }

    // Salvataggio
    setProblemShopsThreshold(threshold);

    // Conferma e ricalcolo opzionale
    const confirmMsg = `✅ Soglia aggiornata a ${threshold}%\n\nVuoi ricalcolare i risultati immediatamente?`;
    if (pivotData.length > 0 && confirm(confirmMsg)) {
        processData(); // Ricalcolo immediato
    }
}
```

---

## 💰 Gestione Rate Provvigioni

### **Architettura Rate**

#### **🎯 Rate Default Globale**
- **Valore**: Percentuale applicata di default (es: 0.78%)
- **Scope**: Tutti gli operatori senza personalizzazione
- **Storage**: Form input + applicazione algoritmica

#### **👤 Rate Personalizzati**
- **Valore**: Override per operatori specifici
- **Storage**: localStorage (`customRates` object)
- **Priority**: Sovrascrive il rate default

#### **🔄 Hierarchy Logic**
```javascript
function getOperatorRate(operatorName) {
    if (customRates[operatorName]) {
        return customRates[operatorName]; // Rate personalizzato
    }
    return defaultRate; // Rate default
}
```

### **Gestione Massiva Rate**

#### **📄 Applicazione Default a Tutti**
```javascript
function applyDefaultToAll() {
    const defaultValue = parseFloat(document.getElementById('defaultRate').value);

    // Clear all custom rates
    customRates = {};
    localStorage.removeItem('customRates');

    // Apply to all operators in current dataset
    document.querySelectorAll('.operator-rate-input').forEach(input => {
        input.value = defaultValue;
    });

    alert(`✅ Rate ${defaultValue}% applicato a tutti gli operatori`);
}
```

#### **🔄 Reset Completo**
```javascript
function resetCustomRates() {
    customRates = {};
    localStorage.removeItem('customRates');

    // Reset UI to default values
    const defaultValue = parseFloat(document.getElementById('defaultRate').value);
    updateAllRateInputs(defaultValue);

    alert('🔄 Tutte le personalizzazioni sono state rimosse');
}
```

### **Audit e Tracking**

#### **📊 Report Rate Personalizzati**
```javascript
function generateRateAuditReport() {
    const customCount = Object.keys(customRates).length;
    const totalOperators = getTotalOperatorsCount();

    return {
        totalOperators,
        customizedOperators: customCount,
        customizationRate: (customCount / totalOperators * 100).toFixed(1),
        averageCustomRate: calculateAverageCustomRate(),
        highestRate: Math.max(...Object.values(customRates)),
        lowestRate: Math.min(...Object.values(customRates))
    };
}
```

#### **💾 Backup Configurazioni**
```javascript
function exportRateConfiguration() {
    const config = {
        defaultRate: parseFloat(document.getElementById('defaultRate').value),
        customRates: customRates,
        exportDate: new Date().toISOString(),
        version: "2.0.0"
    };

    const blob = new Blob([JSON.stringify(config, null, 2)], {
        type: 'application/json'
    });

    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `sales-analyzer-rates-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
}
```

---

## 📊 Monitoraggio Performance

### **KPI Dashboard Admin**

#### **📈 Metriche Applicazione**
- **Tempo caricamento**: Performance dell'app
- **Dimensione dataset**: Numero record elaborati
- **Frequenza utilizzo**: Pattern di accesso utenti
- **Error rate**: Frequenza errori/fallimenti

#### **📊 Metriche Business**
- **Negozi monitorati**: Copertura analisi
- **Alert generati**: Numero negozi in difficoltà
- **Rate personalizzati**: Percentuale customizzazione
- **Export PDF**: Frequenza reporting

### **Monitoring Tools**

#### **🔍 Browser DevTools**
```javascript
// Console monitoring commands
console.log('Soglia corrente:', getProblemShopsThreshold());
console.log('Rate personalizzati:', Object.keys(customRates).length);
console.log('Dataset size:', rawData.length);
console.log('Memoria localStorage:', JSON.stringify(localStorage).length);
```

#### **📊 Performance Analytics**
```javascript
function getPerformanceMetrics() {
    return {
        loadTime: performance.now(),
        memoryUsage: navigator.deviceMemory || 'unknown',
        datasetSize: rawData.length,
        customRatesCount: Object.keys(customRates).length,
        localStorageSize: JSON.stringify(localStorage).length,
        lastCalculation: window.lastCalculationTime || null
    };
}
```

### **Health Checks**

#### **🏥 Sistema Health Check**
```javascript
function performHealthCheck() {
    const checks = {
        dataLoaded: rawData.length > 0,
        localStorageWorking: testLocalStorage(),
        calculationFunctioning: testCalculation(),
        pdfExportWorking: testPDFGeneration(),
        alertSystemWorking: testAlertSystem()
    };

    const healthScore = Object.values(checks).filter(Boolean).length / Object.keys(checks).length * 100;

    return {
        checks,
        healthScore: healthScore.toFixed(1),
        status: healthScore > 80 ? 'healthy' : healthScore > 60 ? 'warning' : 'critical'
    };
}
```

---

## 👥 Gestione Utenti

### **Livelli di Accesso**

#### **🎯 Ruoli Definiti**

##### **👑 Super Admin**
- **Permessi**: Configurazione completa sistema
- **Accesso**: Tutti i controlli admin
- **Responsabilità**: Configurazione soglie, backup, troubleshooting

##### **📊 Manager**
- **Permessi**: Visualizzazione avanzata + export
- **Accesso**: Timeline Evolution, PDF export
- **Responsabilità**: Analisi business, reporting

##### **👤 Utente Standard**
- **Permessi**: Analisi base
- **Accesso**: Caricamento dati, visualizzazione risultati
- **Responsabilità**: Operazioni quotidiane

### **Training e Onboarding**

#### **📚 Materiali Formativi**
1. **Quick Start Guide**: 15 minuti per primi risultati
2. **Video Tutorials**: Screencast delle funzionalità principali
3. **Best Practices**: Document con casi d'uso reali
4. **FAQ**: Risposte a domande frequenti

#### **🎓 Percorso Formativo Consigliato**
```
Settimana 1: Caricamento dati + Analisi singolo periodo
Settimana 2: Configurazione provvigioni personalizzate
Settimana 3: Confronto periodi + Export PDF
Settimana 4: Timeline Evolution + Alert system
```

### **Supporto Utenti**

#### **🆘 Escalation Matrix**
```
Livello 1: Self-service (FAQ, Documentazione)
Livello 2: Admin interno (Configurazioni, Training)
Livello 3: Supporto tecnico (Bug, Enhancement)
```

#### **📞 Support Workflow**
1. **Identificazione problema**: Categoria e severità
2. **Gathering info**: Browser, dataset, passi riproduzione
3. **Initial troubleshooting**: Health check, cache clear
4. **Resolution/Escalation**: Fix immediato o escalation
5. **Follow-up**: Verifica soddisfazione utente

---

## 💾 Backup e Sicurezza

### **Strategie Backup**

#### **📊 Backup Configurazioni**
```javascript
function createFullBackup() {
    const backup = {
        timestamp: new Date().toISOString(),
        version: "2.0.0",
        configurations: {
            problemShopsThreshold: getProblemShopsThreshold(),
            defaultRate: parseFloat(document.getElementById('defaultRate').value),
            customRates: customRates
        },
        systemInfo: {
            browser: navigator.userAgent,
            localStorage: Object.keys(localStorage).length
        }
    };

    return backup;
}
```

#### **🔄 Restore Procedure**
```javascript
function restoreFromBackup(backupData) {
    try {
        // Validate backup structure
        if (!backupData.configurations) throw new Error('Invalid backup format');

        // Restore configurations
        setProblemShopsThreshold(backupData.configurations.problemShopsThreshold);
        document.getElementById('defaultRate').value = backupData.configurations.defaultRate;
        customRates = backupData.configurations.customRates || {};
        localStorage.setItem('customRates', JSON.stringify(customRates));

        alert('✅ Configurazioni ripristinate con successo');

    } catch (error) {
        alert('❌ Errore nel ripristino: ' + error.message);
    }
}
```

### **Sicurezza Dati**

#### **🔒 Data Privacy**
- **Local Processing**: Tutti i dati elaborati localmente nel browser
- **No Server Communication**: Nessun invio dati a server esterni
- **localStorage Only**: Persistenza solo locale
- **No Analytics**: Nessun tracking utenti o dati business

#### **🛡️ Security Best Practices**
```javascript
// Input sanitization
function sanitizeInput(input) {
    return input.toString().replace(/[<>]/g, '');
}

// Safe number parsing
function parseNumber(value, defaultValue = 0) {
    const parsed = parseFloat(value);
    return isNaN(parsed) ? defaultValue : parsed;
}

// Validate CSV structure
function validateCSVStructure(data) {
    const requiredColumns = ['operatore', 'codDep', 'periodo', 'importo', 'nrTrans'];
    return requiredColumns.every(col => data[0].hasOwnProperty(col));
}
```

### **Disaster Recovery**

#### **🚨 Recovery Scenarios**

##### **Browser Cache Corrupted**
```
1. F5 - Simple reload
2. Ctrl+Shift+R - Hard refresh
3. Clear cache + reload
4. Restore from backup
```

##### **localStorage Lost**
```
1. Check backup availability
2. Restore configurations
3. Re-import CSV data
4. Reconfigure custom rates
```

##### **App Not Loading**
```
1. Check browser compatibility
2. Disable extensions
3. Try incognito mode
4. Use alternative browser
```

---

## 🔧 Risoluzione Problemi Avanzata

### **Debug Tools**

#### **🕵️ Console Debugging**
```javascript
// Enable debug mode
window.DEBUG_MODE = true;

// Performance monitoring
console.time('calculation');
processData();
console.timeEnd('calculation');

// Memory usage check
console.log('Memory usage:', window.performance.memory);

// Dataset integrity check
function validateDataIntegrity() {
    const issues = [];

    if (rawData.length === 0) issues.push('No data loaded');
    if (Object.keys(customRates).length > rawData.length) issues.push('More custom rates than operators');
    if (getProblemShopsThreshold() < 5 || getProblemShopsThreshold() > 50) issues.push('Invalid threshold');

    return issues;
}
```

#### **📊 System Diagnostics**
```javascript
function runDiagnostics() {
    const diagnostics = {
        browser: {
            name: navigator.userAgent,
            cookiesEnabled: navigator.cookieEnabled,
            onLine: navigator.onLine
        },
        localStorage: {
            available: typeof(Storage) !== "undefined",
            used: JSON.stringify(localStorage).length,
            capacity: '~5MB typical'
        },
        application: {
            dataLoaded: rawData.length > 0,
            calculationsReady: typeof processData === 'function',
            pdfLibraryLoaded: typeof jsPDF !== 'undefined'
        },
        performance: getPerformanceMetrics()
    };

    console.table(diagnostics);
    return diagnostics;
}
```

### **Common Issues Resolution**

#### **❌ "Calculation Takes Too Long"**
```javascript
// Solution: Implement progress indicator
function processDataWithProgress() {
    showProgressIndicator();

    setTimeout(() => {
        try {
            processData();
        } finally {
            hideProgressIndicator();
        }
    }, 100);
}
```

#### **❌ "PDF Export Fails"**
```javascript
// Solution: Chunked processing
function exportLargePDF() {
    const chunkSize = 50; // Process 50 shops at a time
    const chunks = chunkArray(pivotData, chunkSize);

    chunks.forEach((chunk, index) => {
        setTimeout(() => {
            processPDFChunk(chunk, index);
        }, index * 100);
    });
}
```

#### **❌ "Memory Issues with Large Datasets"**
```javascript
// Solution: Memory management
function optimizeMemoryUsage() {
    // Clear unused variables
    window.temporaryData = null;

    // Force garbage collection (Chrome DevTools)
    if (window.gc) window.gc();

    // Implement data pagination
    const maxRecords = 10000;
    if (rawData.length > maxRecords) {
        showMemoryWarning();
        return rawData.slice(0, maxRecords);
    }

    return rawData;
}
```

---

## 🎯 Best Practices

### **Configurazione Ottimale**

#### **🎛️ Setup Iniziale**
```yaml
Timeline Soglia:
  - Retail Fashion: 20% (baseline)
  - Business Stabile: 25%
  - Startup/Crescita: 15%

Rate Provvigioni:
  - Standard: 0.75-0.80%
  - Senior: 0.85-1.00%
  - Junior: 0.60-0.70%
  - Manager: 1.00-1.25%

Monitoraggio:
  - Review mensile soglie
  - Audit trimestrale rate
  - Backup settimanale config
```

#### **📊 Governance Process**
```
1. Monthly Review:
   - Analisi alert generati
   - Valutazione efficacia soglie
   - Feedback utenti

2. Quarterly Audit:
   - Review rate personalizzati
   - Performance analysis
   - Training needs assessment

3. Annual Planning:
   - Strategic threshold planning
   - Technology roadmap
   - User expansion planning
```

### **Operational Excellence**

#### **📈 Continuous Improvement**
- **Metrics Collection**: Traccia utilizzo e performance
- **User Feedback**: Survey regolari per miglioramenti
- **Best Practice Sharing**: Documenta casi di successo
- **Training Updates**: Mantieni materiali aggiornati

#### **🔄 Change Management**
```
1. Impact Assessment: Valuta impatto modifiche
2. Stakeholder Communication: Informa utenti interessati
3. Gradual Rollout: Implementa cambiamenti gradualmente
4. Monitoring: Monitora impatto post-implementazione
5. Rollback Plan: Prepara piano di rollback se necessario
```

### **📚 Knowledge Management**

#### **🗂️ Documentation Standards**
- **Configuration Changes**: Log tutte le modifiche
- **Issue Resolution**: Documenta soluzioni per riferimento futuro
- **User Patterns**: Traccia pattern di utilizzo comune
- **Performance Baselines**: Mantieni metriche baseline aggiornate

#### **🎓 Team Development**
- **Cross-training**: Forma multipli admin
- **Knowledge Sharing**: Session regolari di condivisione
- **External Learning**: Partecipa a community e training
- **Innovation**: Esplora nuove funzionalità e miglioramenti

---

**🎛️ Sales Analyzer Admin Guide** - *Gestione professionale per risultati ottimali*

*Ultimo aggiornamento: Settembre 2024*