import ServiceTime from '../models/serviceTime';
import { identifierValidator } from '../validation/identifierValidator';
import { serviceTimeValidator } from '../validation/serviceTimeValidator';
import { logger } from '../../utils/logger';
import { mongoConnect } from '@/utils/connectDb';

mongoConnect();

async function addServiceTime( suid , body) {
  try {
    const identifierValidateResult = identifierValidator(suid);
    if (identifierValidateResult.length) {
      const error = new Error(identifierValidateResult.map((it) => it.message).join(','));
      error.invalidArgs = identifierValidateResult.map((it) => it.field).join(',');
      throw error;
    }

    const bodyErrors = serviceTimeValidator(body);
    if (bodyErrors.length) {
      const error = new Error(bodyErrors.map((it) => it.message).join(','));
      error.invalidArgs = bodyErrors.map((it) => it.field).join(',');
      throw error;
    }
    const newServiceTime = new ServiceTime({
      suid,
      ...body
    });

    const savedServiceTime = await newServiceTime.save();
    return savedServiceTime;
  } catch (error) {
    logger.error(error);
    throw new Error('Error adding service time');
  }
}

async function editServiceTime(id, body) {
  try {
    const identifierValidateResult = identifierValidator(id);
    if (identifierValidateResult.length) {
      const error = new Error(identifierValidateResult.map((it) => it.message).join(','));
      error.invalidArgs = identifierValidateResult.map((it) => it.field).join(',');
      throw error;
    }

    const bodyErrors = serviceTimeValidator(body);
    if (bodyErrors.length) {
      const error = new Error(bodyErrors.map((it) => it.message).join(','));
      error.invalidArgs = bodyErrors.map((it) => it.field).join(',');
      throw error;
    }
    await ServiceTime.findByIdAndUpdate(id, body, {
      new: true
    });
    return true;
  } catch (error) {
    logger.error(error);
    throw new ApolloError('Error editing service time');
  }
}

async function deleteServiceTime(id) {
  try {
    const identifierValidateResult = identifierValidator(id);
    if (identifierValidateResult.length) {
      const error = new Error(identifierValidateResult.map((it) => it.message).join(','));
      error.invalidArgs = identifierValidateResult.map((it) => it.field).join(',');
      throw error;
    }
    await ServiceTime.findByIdAndDelete(id);
    return true;
  } catch (error) {
    console.error(error);
    throw new Error('Error deleting service time');
  }
}

async function getServiceTimeById(id) {
  try {
    const identifierValidateResult = identifierValidator(id);
    if (identifierValidateResult.length) {
      const error = new Error(identifierValidateResult.map((it) => it.message).join(','));
      error.invalidArgs = identifierValidateResult.map((it) => it.field).join(',');
      throw error;
    }
    const serviceTime = await ServiceTime.findById(id);
    return serviceTime;
  } catch (error) {
    logger.error(error);
    throw new Error('Error fetching service time');
  }
}

async function getAllServiceTimes(suid, status = false) {
  try {
    const identifierValidateResult = identifierValidator(suid);
    if (identifierValidateResult.length) {
      const error = new Error(identifierValidateResult.map((it) => it.message).join(','));
      error.invalidArgs = identifierValidateResult.map((it) => it.field).join(',');
      throw error;
    }

    const allServiceTimes = await ServiceTime.find({ suid, status: status });
    return allServiceTimes.sort((a, b) => a.sequency_no - b.sequency_no);
  } catch (error) {
    logger.error(error);
    throw new Error('Error getting all service times');
  }
}

export {
  addServiceTime,
  editServiceTime,
  deleteServiceTime,
  getServiceTimeById,
  getAllServiceTimes
};
