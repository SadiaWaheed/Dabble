using System.Runtime.CompilerServices;
using CloudinaryDotNet.Actions;
using Microsoft.AspNetCore.DataProtection.AuthenticatedEncryption.ConfigurationModel;

namespace API.Interfaces
{
    public interface IPhotoService
    {
        Task<ImageUploadResult> AddPhotoAsync(IFormFile file);
        Task<DeletionResult> DeltePhotoAsync(string publicId);
    }
}