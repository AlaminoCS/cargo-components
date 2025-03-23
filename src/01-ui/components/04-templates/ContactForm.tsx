// src/01-ui/components/04-templates/ContactForm.tsx
import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  Container,
  FormHelperText,
} from '@mui/material';
import { PatternFormat } from 'react-number-format'; // Importa PatternFormat para máscaras de texto

interface ContactFormProps {
  phoneNumber: string; // Propriedade para o número de telefone
}

const ContactForm: React.FC<ContactFormProps> = ({ phoneNumber }) => {
  // Estado para armazenar os valores dos campos do formulário
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  // Estado para armazenar os erros de validação
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  // Função para lidar com mudanças nos campos
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    // Atualiza o estado do formulário
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // Valida o campo atual
    validateField(name, value);
  };

  // Função para validar um campo específico
  const validateField = (name: string, value: string) => {
    let error = '';

    switch (name) {
      case 'name':
        error = value.trim() === '' ? 'O nome é obrigatório.' : '';
        break;
      case 'email':
        error =
          !value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/) && value.trim() !== ''
            ? 'E-mail inválido.'
            : value.trim() === ''
            ? 'O e-mail é obrigatório.'
            : '';
        break;
      case 'phone':
        error =
          value.replace(/[^0-9]/g, '').length !== 11 && value.trim() !== ''
            ? 'Telefone inválido. Use o formato (99) 99999-9999.'
            : value.trim() === ''
            ? 'O telefone é obrigatório.'
            : '';
        break;
      case 'subject':
        error = value.trim() === '' ? 'O assunto é obrigatório.' : '';
        break;
      case 'message':
        error = value.trim() === '' ? 'A mensagem é obrigatória.' : '';
        break;
      default:
        break;
    }

    // Atualiza o estado de erros
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error,
    }));
  };

  // Função para validar todo o formulário
  const validateForm = () => {
    const newErrors = {
      name: formData.name.trim() === '' ? 'O nome é obrigatório.' : '',
      email:
        !formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/) &&
        formData.email.trim() !== ''
          ? 'E-mail inválido.'
          : formData.email.trim() === ''
          ? 'O e-mail é obrigatório.'
          : '',
      phone:
        formData.phone.replace(/[^0-9]/g, '').length !== 11 &&
        formData.phone.trim() !== ''
          ? 'Telefone inválido. Use o formato (99) 99999-9999.'
          : formData.phone.trim() === ''
          ? 'O telefone é obrigatório.'
          : '',
      subject: formData.subject.trim() === '' ? 'O assunto é obrigatório.' : '',
      message: formData.message.trim() === '' ? 'A mensagem é obrigatória.' : '',
    };

    setErrors(newErrors);

    // Retorna true se não houver erros
    return Object.values(newErrors).every((error) => error === '');
  };

  // Função para enviar a mensagem via WhatsApp
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // Valida o formulário antes de enviar
    if (validateForm()) {
      // Formatar a mensagem
      const whatsappMessage = `
Olá, meu nome é *${formData.name}* e vim aqui através do seu site. Gostaria de falar sobre *${formData.subject}*. 

"${formData.message}"

Aguardo o seu contato através do meu telefone *${formData.phone}* ou e-mail *${formData.email}*. Obrigado!
      `;

      // Redirecionar para o WhatsApp
      window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
    }
  };

  return (
    <section>
      <Container id="contato">
        <Box sx={{ my: 4 }}>
          {/* Título */}
          <Typography variant="h2" align="left" gutterBottom>
            Escreva-nos
          </Typography>

          {/* Formulário */}
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            autoComplete="off"
            sx={{
              '& .MuiTextField-root': { mb: 2 }, // Espaçamento entre os campos
            }}
          >
            <Grid container spacing={2}>
              {/* Campo Nome */}
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Nome"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  error={!!errors.name}
                  helperText={errors.name}
                />
              </Grid>

              {/* Campo E-mail */}
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="E-mail"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  error={!!errors.email}
                  helperText={errors.email}
                />
              </Grid>

              {/* Campo Telefone com Máscara */}
              <Grid item xs={12} sm={6}>
                <PatternFormat
                  customInput={TextField}
                  fullWidth
                  label="Telefone"
                  name="phone"
                  value={formData.phone}
                  onValueChange={(values) => {
                    const { value } = values;
                    setFormData((prevData) => ({
                      ...prevData,
                      phone: value,
                    }));
                    validateField('phone', value);
                  }}
                  format="(##) #####-####" // Máscara de telefone
                  mask="_" // Placeholder para cada caractere
                  required
                  error={!!errors.phone}
                  helperText={errors.phone}
                />
              </Grid>

              {/* Campo Assunto */}
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Assunto"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  error={!!errors.subject}
                  helperText={errors.subject}
                />
              </Grid>

              {/* Campo Mensagem */}
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Mensagem"
                  name="message"
                  multiline
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  error={!!errors.message}
                  helperText={errors.message}
                />
              </Grid>

              {/* Botão Enviar */}
              <Grid
                item
                xs={12}
                container
                justifyContent="flex-end" // Alinha o botão à direita
              >
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  sx={{ py: 1.5 }}
                  disabled={!Object.values(errors).every((error) => error === '')}
                >
                  Enviar
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </section>
  );
};

export default ContactForm;