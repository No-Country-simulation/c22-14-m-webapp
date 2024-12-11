import React, { useState, useEffect } from 'react';
import { Box, Container, Avatar, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from '../../common/components/components';
import { Edit as EditIcon, Add as AddIcon } from '@mui/icons-material';

const BOX_WRAPPER_STYLES = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}


const BOX_WRAPPER_STACK = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'flex-start',
  gap: '40px'
}


const MedicalHistoryView = ({ isDoctor, patientId }) => {
  const [patient, setPatient] = useState({});
  const [medicalRecords, setMedicalRecords] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [currentRecord, setCurrentRecord] = useState({});

  useEffect(() => {
    fetchPatientData();
    fetchMedicalRecords();
  }, [patientId]);

  const fetchPatientData = async () => {
    // Obtener datos de pacientes de API
    // setPatient(data);
  };

  const fetchMedicalRecords = async () => {
    //  Obtener registros médicos de  API utilizando HISTORY_MEDICAL 
    // setMedicalRecords(data);
  };

  const handleOpenDialog = (record = {}) => {
    setCurrentRecord(record);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setCurrentRecord({});
  };

  const handleSaveRecord = async () => {
    //Guardar o actualizar el registro
    // Si currentRecord tiene una identificación, actualícela; de lo contrario, cree una nueva
    // Después de guardar, recupera los registros nuevamente y cierra el diálogo
    await fetchMedicalRecords();
    handleCloseDialog();
  };

  return (
    <Box sx={BOX_WRAPPER_STYLES}>
      <Container>
        <Box sx={BOX_WRAPPER_STACK}>
          <Avatar sx={{ width: 100, height: 100 }}>{patient.nombre?.charAt(0) || 'P'}</Avatar>
          <Box id="data-patient">
            {/* Renderizar con los name correspondientes */}
            <Typography variant="h4">Datos del paciente</Typography>
            <Typography variant="body1"><strong>DNI:</strong> {patient.dni}</Typography>
            <Typography variant="body1"><strong>Nombre:</strong> {patient.nombre}</Typography>
            <Typography variant="body1"><strong>Alergias:</strong> {patient.allergy}</Typography>
            <Typography variant="body1"><strong>Tipo de sangre:</strong> {patient.typeTheBlood}</Typography>
          </Box>
        </Box>

        <Box>
          {isDoctor && (
            <Button startIcon={<AddIcon />} onClick={() => handleOpenDialog()}>
              Agregar Historial
            </Button>
          )}
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Fecha</TableCell>
                  <TableCell>Motivo de consulta médica</TableCell>
                  <TableCell>Especialidad</TableCell>
                  <TableCell>Médico</TableCell>
                  <TableCell>Medicamentos</TableCell>
                  <TableCell>Diagnóstico</TableCell>
                  {isDoctor && <TableCell>Acciones</TableCell>}
                </TableRow>
              </TableHead>
              <TableBody>
                {/* Renderizar con los name correspondientes */}
                {medicalRecords.map((record, index) => (
                  <TableRow key={index}>
                    <TableCell>{record.fecha}</TableCell>
                    <TableCell>{record.motivoDeConsulta}</TableCell>
                    <TableCell>{record.medicamentos}</TableCell>
                    <TableCell>{record.tipoDeSangre}</TableCell>
                    <TableCell>{record.diagnostico}</TableCell>
                    {isDoctor && (
                      <TableCell>
                        <Button startIcon={<EditIcon />} onClick={() => handleOpenDialog(record)}>
                          Editar
                        </Button>
                      </TableCell>
                    )}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Container>
      {/* Renderizar con los name correspondientes */}
      {isDoctor && (
        <Dialog open={openDialog} onClose={handleCloseDialog}>
          <DialogTitle>{currentRecord.id ? 'Editar Historial' : 'Nuevo Historial'}</DialogTitle>
          <DialogContent>
            <TextField label="Fecha" value={currentRecord.fecha || ''} onChange={(e) => setCurrentRecord({ ...currentRecord, fecha: e.target.value })} fullWidth margin="normal" />
            <TextField label="Motivo de consulta" value={currentRecord.motivoDeConsulta || ''} onChange={(e) => setCurrentRecord({ ...currentRecord, motivoDeConsulta: e.target.value })} fullWidth margin="normal" />
            <TextField label="Especialidad" value={currentRecord.especialidad || ''} onChange={(e) => setCurrentRecord({ ...currentRecord, medicamentos: e.target.value })} fullWidth margin="normal" />
            <TextField label="Médico" value={currentRecord.medico || ''} onChange={(e) => setCurrentRecord({ ...currentRecord, tipoDeSangre: e.target.value })} fullWidth margin="normal" />
            <TextField label="Medicamentos" value={currentRecord.medicamentos || ''} onChange={(e) => setCurrentRecord({ ...currentRecord, medicamentos: e.target.value })} fullWidth margin="normal" />
            <TextField label="Diagnóstico" value={currentRecord.diagnostico || ''} onChange={(e) => setCurrentRecord({ ...currentRecord, diagnostico: e.target.value })} fullWidth margin="normal" />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog}>Cancelar</Button>
            <Button onClick={handleSaveRecord}>Guardar</Button>
          </DialogActions>
        </Dialog>
      )}
    </Box>
  );
};

export default MedicalHistoryView;

